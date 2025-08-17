// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./services/firebase";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Mathematics from "./pages/Mathematics";
import English from "./pages/English";
import Science from "./pages/Science";
import SocialStudies from "./pages/SocialStudies";
import NotFound from "./pages/NotFound";

// Protected route wrapper
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Subject pages */}
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/english" element={<English />} />
        <Route path="/science" element={<Science />} />
        <Route path="/social-studies" element={<SocialStudies />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
