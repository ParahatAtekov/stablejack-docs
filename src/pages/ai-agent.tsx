import React, { useState, FormEvent, ChangeEvent } from 'react';
import Layout from '@theme/Layout';
import axios, { AxiosResponse } from 'axios';

interface AIChoice {
  text: string;
}

interface AIResponse {
  choices: AIChoice[];
}

const AIAgent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res: AxiosResponse<AIResponse> = await axios.post(
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

      const answer = res.data.choices[0]?.text?.trim() || 'No response.';
      setResponse(answer);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setResponse(`API Error: ${error.response?.data?.error || error.message}`);
      } else {
        setResponse('Unexpected error. Check console.');
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Layout title="AI Agent – Ask StableJack">
      <div
        style={{
          padding: '3rem 1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h1 style={{ color: '#D6FE51', marginBottom: '1rem' }}>
          Ask the StableJack AI
        </h1>
        <p style={{ color: '#aaa', marginBottom: '2rem' }}>
          Search docs, explain concepts, or get instant answers.
        </p>

        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="e.g. How does leveraged yield work?"
            disabled={loading}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '14px 18px',
              fontSize: '1.1rem',
              border: '2px solid #D6FE51',
              borderRadius: '50px',
              background: '#000',
              color: '#fff',
              outline: 'none',
              marginRight: '10px',
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: '1rem',
              padding: '14px 32px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              background: '#D6FE51',
              color: '#000',
              border: 'none',
              borderRadius: '50px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              boxShadow: loading ? 'none' : '0 0 15px rgba(57, 255, 20, 0.5)',
            }}
          >
            {loading ? 'Thinking...' : 'Ask AI'}
          </button>
        </form>

        {response && (
          <div
            style={{
              background: '#111',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #D6FE51',
              textAlign: 'left',
              color: '#eee',
              whiteSpace: 'pre-wrap',
            }}
          >
            {response}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AIAgent;