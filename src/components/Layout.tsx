
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import InsolvencyPopup from './InsolvencyPopup';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <InsolvencyPopup />
    </div>
  );
};

export default Layout;
