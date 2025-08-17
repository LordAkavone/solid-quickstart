import React from 'react';
import { getAuth, signInAnonymously, signInWithCustomToken } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Main component for a well-structured and functional 404 page.
// This is a complete, self-contained React component.
const App = () => {
  // A helper function to simulate a navigation action.
  const handleNavigateHome = () => {
    // In a real application, you would use a router (like react-router-dom)
    // to navigate to the home page. For this example, we'll log a message.
    console.log("Navigating to the home page...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="text-center p-8 bg-gray-800 rounded-xl shadow-lg">
        {/* Main heading for the 404 error */}
        <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">
          404
        </h1>

        {/* Subheading with a clear message */}
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Page Not Found
        </h2>

        {/* Descriptive paragraph */}
        <p className="max-w-prose mx-auto text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action button to navigate back home */}
        <button
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium text-white transition-colors duration-200"
          onClick={handleNavigateHome}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default App;
