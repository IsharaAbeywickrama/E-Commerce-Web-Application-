import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Public Route component (redirects to home if already authenticated)
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      
      {/* Auth Routes (only for non-authenticated users) */}
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } 
      />
      <Route 
        path="/signup" 
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        } 
      />
      
      {/* Protected Routes (only for authenticated users) */}
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          // <ProtectedRoute>
            <Profile />
          // </ProtectedRoute>
        } 
      />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;