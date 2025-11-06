import React, { useState, ChangeEvent, FormEvent } from 'react';
import Translate from '@docusaurus/Translate';
import { useThemeConfig } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import axios from 'axios';

interface AIResponse {
  choices: Array<{ text: string }>;
}

const SearchBar: React.FC = () => {
  const { navbar } = useThemeConfig();
  const isBrowser = useIsBrowser();
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const apiRes = await axios.post(
        'https://api.x.ai/v1/chat/completions',
        {
          messages: [{ role: 'user', content: `Based on StableJack docs: ${query}` }],
          model: 'grok-beta',
        },
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_XAI_API_KEY}` },
        }
      );
      setResponse(apiRes.data.choices[0]?.text || 'No response from AI.');
    } catch (error) {
      setResponse('Error: Check API key or connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  if (!navbar?.items?.some((item) => item.type === 'search')) {
    return null;
  }

  return isBrowser ? (
    <form onSubmit={handleSubmit} className="navbar__search">
      <input
        type="search"
        name="q"
        className="navbar__search-input"
        placeholder={loading ? 'Thinking...' : 'Search docs...'}
        aria-label="Search"
        onChange={handleChange}
        value={query}
        disabled={loading}
      />
      {response && <div className="search-result-dropdown">{response}</div>}
    </form>
  ) : null;
};

export default SearchBar;