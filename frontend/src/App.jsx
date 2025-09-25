import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import SimpleLayout from './components/SimpleLayout.jsx';
import SimpleLoginForm from './components/SimpleLoginForm.jsx';
import SimpleRegisterForm from './components/SimpleRegisterForm.jsx';
import SimpleDashboard from './pages/SimpleDashboard.jsx';
import Tasks from './pages/Tasks.jsx';
import Profile from './pages/Profile.jsx';
import NewTask from './pages/NewTask.jsx';
import EditTask from './pages/EditTask.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<SimpleLoginForm />} />
            <Route path="/register" element={<SimpleRegisterForm />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <SimpleLayout>
                    <SimpleDashboard />
                  </SimpleLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <SimpleLayout>
                    <Tasks />
                  </SimpleLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks/new"
              element={
                <ProtectedRoute>
                  <SimpleLayout>
                    <NewTask />
                  </SimpleLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks/:id/edit"
              element={
                <ProtectedRoute>
                  <SimpleLayout>
                    <EditTask />
                  </SimpleLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <SimpleLayout>
                    <Profile />
                  </SimpleLayout>
                </ProtectedRoute>
              }
            />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
