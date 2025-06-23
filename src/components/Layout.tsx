
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import InsolvencyPopup from './InsolvencyPopup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showInsolvencyPopup, setShowInsolvencyPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show popup on every route change/page load
    const timer = setTimeout(() => {
      setShowInsolvencyPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClosePopup = () => {
    setShowInsolvencyPopup(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <InsolvencyPopup 
        isOpen={showInsolvencyPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  );
};

export default Layout;
