import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainPage from './pages/MainPage';
import UserDetailsView from './pages/UserDetailsView';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data fresh for 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="container mx-auto p-4">
          <nav className="mb-4 p-4 bg-gray-100 rounded-md">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/users/:id" element={<UserDetailsView />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
