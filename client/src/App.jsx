import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewsPage from './pages/NewsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<NewsPage />} path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
