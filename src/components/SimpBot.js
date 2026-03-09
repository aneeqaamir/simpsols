import React, { useState, useRef, useEffect } from 'react';
import './SimpBot.css';

const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY';

const SYSTEM_CONTEXT = `You are SimpBot, the AI assistant for SimpSols — a startup-focused digital agency that builds AI tools, software products, and digital systems for founders and businesses.

Your role:
- Welcome visitors warmly and introduce SimpSols
- Answer questions about SimpSols services: AI Solutions, Marketing, Content, and Development
- Discuss the visitor's business problems and how SimpSols can help
- For detailed quotes, custom projects, or serious inquiries, guide them to book a free 30-minute call at simpsols.com/book
- Keep responses concise, friendly, and professional
- You represent a premium technical partner, not a generic agency

SimpSols core services:
1. AI Solutions — AI tools, automation, AI MVPs, custom integrations
2. Marketing — Performance marketing, paid campaigns, growth strategy, funnels
3. Content — Social media, short-form video, creative assets, copywriting
4. Development — Web apps, SaaS MVPs, landing pages, ecommerce

Always end conversations that go deep into project specifics by encouraging them to book a call: "Book a free 30-minute call at simpsols.com/book to get a tailored solution and quote."

Keep responses under 120 words unless they ask a detailed question. Be direct and confident.`;

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: "Hey! I'm **SimpBot** 👋 — your guide to everything SimpSols.\n\nWe help founders build AI tools, software, and digital systems that actually move the needle.\n\nWhat are you working on? Tell me about your project or problem."
};

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

export default function SimpBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const conversationHistory = newMessages
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_CONTEXT }] },
            contents: conversationHistory,
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 300,
            }
          })
        }
      );

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Try again!";

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Hmm, something went wrong on my end. You can reach us directly at hello@simpsols.com or book a call at simpsols.com/book"
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div className={`simpbot__window ${open ? 'simpbot__window--open' : ''}`}>
        <div className="simpbot__header">
          <div className="simpbot__header-info">
            <div className="simpbot__avatar">S</div>
            <div>
              <div className="simpbot__name">SimpBot</div>
              <div className="simpbot__status">
                <span className="simpbot__dot" />
                Online
              </div>
            </div>
          </div>
          <button className="simpbot__close" onClick={() => setOpen(false)} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="simpbot__messages">
          {messages.map((msg, i) => (
            <div key={i} className={`simpbot__msg simpbot__msg--${msg.role}`}>
              <div
                className="simpbot__bubble"
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
              />
            </div>
          ))}
          {loading && (
            <div className="simpbot__msg simpbot__msg--assistant">
              <div className="simpbot__bubble simpbot__typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="simpbot__input-area">
          <textarea
            ref={inputRef}
            className="simpbot__input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me anything..."
            rows={1}
          />
          <button
            className="simpbot__send"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`simpbot__toggle ${open ? 'simpbot__toggle--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Open SimpBot"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!open && <span className="simpbot__badge">1</span>}
      </button>
    </>
  );
}
