import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
