'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Member', href: '/member' },
  { label: 'About', href: '/about' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-nike-black/95 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-black text-nike-white hover:text-nike-red transition">
          N
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-wider text-nike-muted hover:text-nike-white transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block px-6 py-2 bg-nike-red text-nike-white font-condensed font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-nike-red/90 transition">
          Shop Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 bg-nike-white transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 bg-nike-white transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-nike-white transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-zinc-800 px-4 py-4 space-y-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm uppercase tracking-wider text-nike-muted hover:text-nike-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full px-4 py-2 bg-nike-red text-nike-white font-condensed font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-nike-red/90 transition">
            Shop Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
