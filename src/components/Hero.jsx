import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#01112B] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-white/70">Creative · Marketing · AI Automation</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            We don’t just make brands visible — we make them intelligent.
          </h1>
          <p className="mt-5 max-w-xl text-white/80">
            Blooms Creatives blends design, marketing, and AI to build brands that move faster and grow smarter.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-[#8BED02] px-5 py-3 text-sm font-semibold text-[#01112B] shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02]"
            >
              Let’s Talk
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02]"
            >
              See Work
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#01112B] via-transparent to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
}
