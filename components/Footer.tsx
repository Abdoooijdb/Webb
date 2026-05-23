'use client';

const links = [
  { title: 'Help', items: ['Contact Us', 'Track Order', 'Shipping Info', 'Returns'] },
  { title: 'About', items: ['Our Story', 'Careers', 'Sustainability', 'Press'] },
  { title: 'Follow', items: ['Instagram', 'Twitter', 'Facebook', 'YouTube'] },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-nike-black px-4 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="font-condensed font-bold text-sm uppercase tracking-wider text-nike-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-nike-muted hover:text-nike-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-xs text-nike-muted text-center">
            © {currentYear} Nike, Inc. All rights reserved. | High-Converting E-Commerce Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
