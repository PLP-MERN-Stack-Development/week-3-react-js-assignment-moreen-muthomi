// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../contexts/ThemeSwitcher'; // Import

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">MyApp</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Task Manager</Link>
          <Link to="/api-data" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">API Data</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}