export default function Footer() {
  return (
    <footer className="bg-[#0F213A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Blooms Creatives. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#services" className="text-white/80 hover:text-white">Services</a>
          <a href="#work" className="text-white/80 hover:text-white">Work</a>
          <a href="#about" className="text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
