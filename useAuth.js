import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Home - E-Commerce',
      '/products': 'Products - E-Commerce',
      '/cart': 'Shopping Cart - E-Commerce',
      '/profile': 'Profile - E-Commerce',
      '/login': 'Login - E-Commerce',
      '/signup': 'Sign Up - E-Commerce',
    };

    const defaultTitle = 'E-Commerce';
    document.title = pageTitles[location.pathname] || defaultTitle;
  }, [location]);
};

export default usePageTitle;