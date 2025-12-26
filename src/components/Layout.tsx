import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SnowEffect from './SnowEffect';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <SnowEffect />
      <Header />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
