# SimpSols Website

Startup-focused digital agency website — fully custom React frontend + Python FastAPI backend.

---

## Project Structure

```
simpsols/          ← React frontend
simpsols-backend/  ← Python FastAPI backend
```

---

## Frontend Setup

### Install & Run Locally

```bash
cd simpsols
npm install
npm start
```

### Environment Variables

Create a `.env.local` file in the `simpsols/` directory:

```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
REACT_APP_CALENDLY_URL=https://calendly.com/your-link
REACT_APP_API_URL=https://your-backend.railway.app
```

### Deploy to Vercel

1. Push `simpsols/` folder to a GitHub repo
2. Connect repo to [vercel.com](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy — Vercel auto-detects React

**Connect Custom Domain:**
- In Vercel → Project → Settings → Domains
- Add your domain and follow DNS instructions

---

## Backend Setup

### Install & Run Locally

```bash
cd simpsols-backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your values
uvicorn main:app --reload
```

API runs at `http://localhost:8000`
Docs at `http://localhost:8000/docs`

### Deploy to Railway (Free Tier)

1. Push `simpsols-backend/` to a GitHub repo
2. Create new project at [railway.app](https://railway.app)
3. Connect the repo
4. Set environment variables in Railway dashboard
5. Railway auto-detects Python and deploys

---

## SimpBot Configuration

SimpBot uses the Gemini API (free tier). To activate:

1. Get a free API key at [aistudio.google.com](https://aistudio.google.com)
2. Set `REACT_APP_GEMINI_API_KEY` in Vercel environment variables
3. Redeploy

---

## Calendly Setup

1. Create your Calendly account and event type
2. Copy your booking link (e.g. `https://calendly.com/yourname/30min`)
3. Set `REACT_APP_CALENDLY_URL` in Vercel environment variables
4. Redeploy

---

## Blog Automation (AI Agents)

The backend exposes a POST endpoint for AI agents to publish articles:

```
POST /api/blog/posts?api_key=YOUR_BLOG_API_KEY
```

**Payload:**
```json
{
  "slug": "post-url-slug",
  "title": "Post Title",
  "excerpt": "Short description...",
  "content": "<p>HTML content...</p>",
  "category": "AI Strategy",
  "date": "2025-03-10",
  "readTime": "5 min read",
  "featured": false,
  "tags": ["AI", "Strategy"]
}
```

Set `BLOG_API_KEY` in your backend environment to secure the endpoint.

---

## Adding Portfolio Tools

Open `simpsols/src/pages/Portfolio.js` and add to the `TOOLS` array:

```js
{
  id: 'your-tool-id',
  status: 'live',
  title: 'Your Tool Name',
  category: 'AI Category',
  description: 'What it does...',
  features: ['Feature 1', 'Feature 2'],
  url: 'https://your-tool.vercel.app',
  tech: ['React', 'Python', 'GPT-4'],
  color: '#FFC72C',
},
```

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, React Router 6 |
| Styling | Custom CSS (no UI library) |
| Fonts | Bebas Neue + Syne + DM Sans |
| Chatbot | Gemini 1.5 Flash API |
| Booking | Calendly Embed |
| Backend | Python FastAPI |
| Deploy (FE) | Vercel (free) |
| Deploy (BE) | Railway (free) |
