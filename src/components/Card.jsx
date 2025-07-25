export default function Card({ children, className = '' }) {
    return (
      // Add transition and hover effect classes
      <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-105 ${className}`}>
        {children}
      </div>
    );
  }