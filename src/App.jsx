import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import StorePage from './components/StorePage'
import ContactUsPage from './components/ContactUsPage'
import AboutUsPage from './components/AboutUsPage'

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/store" element={<PrivateRoute><StorePage /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><ContactUsPage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><AboutUsPage /></PrivateRoute>} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App



