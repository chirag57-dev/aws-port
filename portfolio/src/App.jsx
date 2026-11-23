import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<CaseStudyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
