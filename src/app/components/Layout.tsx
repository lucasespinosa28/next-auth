import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="text-center p-4 border-t">
        © 2024 My App
      </footer>
    </div>
  );
};

export default Layout;
