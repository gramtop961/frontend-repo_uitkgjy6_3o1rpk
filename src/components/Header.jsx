import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-[#0F213A]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0F213A]/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[#8BED02]" />
              <span className="font-semibold tracking-tight text-white">Blooms Creatives</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02] rounded"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-[#8BED02] px-4 py-2 text-sm font-medium text-[#01112B] shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02]"
              >
                Let’s Talk
              </a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02]"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md bg-[#8BED02] px-4 py-2 text-sm font-medium text-[#01112B] shadow-sm"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
