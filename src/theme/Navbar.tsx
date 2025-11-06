// src/theme/Navbar.tsx – FINAL (integrated AI search)
import React, { useState } from 'react';
import Navbar from '@theme-original/Navbar';
import { useEffect } from 'react';
import axios from 'axios';

export default function NavbarWrapper(props): JSX.Element {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector('.navbar__search-input') as HTMLInputElement;
        input?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAiResponse('');

    try {
      const res = await axios.post(
        'https://api.x.ai/v1/chat/completions',
        {
          messages: [{ role: 'user', content: `Based on StableJack docs: ${query}` }],
          model: 'grok-beta',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_XAI_API_KEY}`,
          },
        }
      );
      setAiResponse(res.data.choices[0]?.text || 'No response.');
    } catch (error) {
      setAiResponse('Error fetching AI response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar {...props} />
      {aiResponse && (
        <div className="ai-dropdown">
          <p>{loading ? 'Thinking...' : aiResponse}</p>
        </div>
      )}
    </div>
  );
}