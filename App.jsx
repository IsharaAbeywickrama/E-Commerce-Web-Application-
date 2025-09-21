import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import AppRoutes from './Routes';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>
              <AppRoutes />
            </main>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;