// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 mt-auto py-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    );
  }