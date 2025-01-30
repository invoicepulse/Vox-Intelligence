import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { SpotlightEffect } from './ui/SpotlightEffect';
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-hidden gradient-background">
      {/* Animated gradient blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />
      <div className="gradient-blob blob-4" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}