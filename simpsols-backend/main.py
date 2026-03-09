from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import json
import os
from datetime import datetime
from pathlib import Path

app = FastAPI(title="SimpSols API", version="1.0.0")

# CORS - update origins for production
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://simpsols.com",
        "https://www.simpsols.com",
        os.getenv("FRONTEND_URL", ""),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Data directory for blog posts ─────────────────────────────────────
BLOG_DIR = Path("data/blog")
BLOG_DIR.mkdir(parents=True, exist_ok=True)


# ─── Models ────────────────────────────────────────────────────────────

class BlogPost(BaseModel):
    slug: str
    title: str
    excerpt: str
    content: str
    category: str
    date: str
    readTime: str
    featured: bool = False
    author: Optional[str] = "SimpSols"
    tags: Optional[List[str]] = []


class ContactInquiry(BaseModel):
    name: str
    email: str
    message: str
    service: Optional[str] = None


# ─── Health Check ──────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"status": "SimpSols API is live", "version": "1.0.0"}

@app.get("/health")
def health():
    return {"status": "healthy", "timestamp": datetime.utcnow().isoformat()}


# ─── Blog Routes ───────────────────────────────────────────────────────

@app.get("/api/blog/posts")
def get_posts():
    """Returns all blog posts sorted by date descending."""
    posts = []
    for f in BLOG_DIR.glob("*.json"):
        try:
            with open(f, "r") as file:
                post = json.load(file)
                # Strip full content from listing for performance
                post_summary = {k: v for k, v in post.items() if k != "content"}
                posts.append(post_summary)
        except Exception:
            continue

    posts.sort(key=lambda x: x.get("date", ""), reverse=True)
    return {"posts": posts, "total": len(posts)}


@app.get("/api/blog/posts/{slug}")
def get_post(slug: str):
    """Returns a single blog post by slug."""
    post_file = BLOG_DIR / f"{slug}.json"
    if not post_file.exists():
        raise HTTPException(status_code=404, detail="Post not found")
    with open(post_file, "r") as f:
        return json.load(f)


@app.post("/api/blog/posts")
def create_post(post: BlogPost, api_key: str = ""):
    """
    Create or update a blog post.
    Called by AI agents to publish new articles.
    Secure this endpoint with an API key in production.
    """
    # Simple API key check — set BLOG_API_KEY env variable in production
    expected_key = os.getenv("BLOG_API_KEY", "")
    if expected_key and api_key != expected_key:
        raise HTTPException(status_code=401, detail="Invalid API key")

    post_file = BLOG_DIR / f"{post.slug}.json"
    with open(post_file, "w") as f:
        json.dump(post.dict(), f, indent=2)

    return {"status": "created", "slug": post.slug}


@app.delete("/api/blog/posts/{slug}")
def delete_post(slug: str, api_key: str = ""):
    """Delete a blog post."""
    expected_key = os.getenv("BLOG_API_KEY", "")
    if expected_key and api_key != expected_key:
        raise HTTPException(status_code=401, detail="Invalid API key")

    post_file = BLOG_DIR / f"{slug}.json"
    if not post_file.exists():
        raise HTTPException(status_code=404, detail="Post not found")
    post_file.unlink()
    return {"status": "deleted", "slug": slug}


# ─── Contact / Inquiry ─────────────────────────────────────────────────

@app.post("/api/contact")
def contact(inquiry: ContactInquiry):
    """
    Saves contact inquiry and optionally sends notification email.
    Connect an email service (SendGrid, Resend) via environment variables.
    """
    # Save to file (replace with database in production)
    inquiries_dir = Path("data/inquiries")
    inquiries_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.utcnow().strftime("%Y%m%d_%H%M%S")
    inquiry_file = inquiries_dir / f"{timestamp}_{inquiry.email.replace('@', '_at_')}.json"

    with open(inquiry_file, "w") as f:
        json.dump({
            **inquiry.dict(),
            "timestamp": datetime.utcnow().isoformat(),
            "status": "new"
        }, f, indent=2)

    # TODO: Add email notification via SendGrid/Resend
    # send_notification_email(inquiry)

    return {"status": "received", "message": "We'll be in touch within 24 hours."}
