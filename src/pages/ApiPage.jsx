// src/pages/ApiPage.jsx
import { useState, useEffect } from 'react';
import Card from '../components/Card';

export default function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this runs once on mount

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">API Posts</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      {/* Loading and Error States */}
      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {/* Data Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <Card key={post.id} className="flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">{post.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}