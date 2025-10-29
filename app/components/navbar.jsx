"use client"
import React from 'react';
import Dp from './3420.jpg'
import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);
  return (
  <nav className={menuOpen ? "bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white p-4 w-[92%] shadow-xl m-auto rounded-t-3xl mt-6 border border-purple-700/40":"bg-gradient-to-r from-gray-900 z-100 via-purple-900 to-gray-800 text-white p-4 w-[92%] shadow-xl m-auto rounded-3xl mt-6 border border-purple-700/40"}>
  <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-extrabold flex items-center gap-1 tracking-tight">
          <span>
            <Image
              src={Dp}
              alt="logo"
              width={36}
              height={36}
              className="rounded-full bg-white shadow-md border border-purple-400"
              style={{ width: '36px', height: '36px' }}
            />
          </span>
          <span className="text-white drop-shadow-lg">.Jumman</span>
        </div>
        <div className="hidden md:flex gap-4">
          {['Home', 'About', 'Projects', 'Contact'].map((tab) => (
            <Link
              key={tab}
              href={tab === 'Home' ? '/' : `../${tab.toLowerCase()}`}
              className="px-5 py-2 font-semibold rounded-xl shadow-md text-shadow-white hover:from-purple-800 hover:to-purple-950 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border border-purple-700/30"
            >
              {tab}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="bg-purple-800/90 border border-purple-400 text-purple-100 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 p-2 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              // Close (X) icon
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              // Hamburger (three lines) icon
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-20 z-50 flex flex-col gap-3 px-4 pt-3 pb-4 bg-gradient-to-b from-purple-900/90 to-gray-900/90 rounded-b-xl shadow-lg border border-purple-700/30 mx-auto w-[92%] transition-all duration-300 transform ${menuOpen ? 'opacity-100 scale-y-100 pointer-events-auto mt-5' : 'opacity-0 scale-y-0 pointer-events-none h-0 overflow-hidden'}`}
        style={{ transformOrigin: 'top' }}
      >
        {['Home', 'About', 'Projects', 'Contact'].map((tab) => (
          <Link
            key={tab}
            href={tab === 'Home' ? '/' : `../${tab.toLowerCase()}`}
            className="px-5 py-2 font-semibold rounded-xl shadow-md text-shadow-white hover:from-purple-800 hover:to-purple-950 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border border-purple-700/30"
            onClick={() => setMenuOpen(false)}
          >
            {tab}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
