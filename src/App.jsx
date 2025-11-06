import Header from './components/Header';
import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B1622]">
      <Header />
      <main>
        <Hero />
        <section id="work" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
                <p className="mt-2 text-slate-600">A few snapshots from recent projects. Full case studies coming soon.</p>
              </div>
              <a href="#contact" className="hidden sm:inline-flex rounded-md bg-[#8BED02] px-4 py-2 text-sm font-semibold text-[#01112B] shadow-sm hover:brightness-95">Start a project</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3].map((i) => (
                <div key={i} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="h-40 bg-gradient-to-br from-[#01112B] to-slate-700" />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Case Study {i}</h3>
                      <span className="text-xs rounded-full bg-[#8BED02]/20 px-2 py-1 text-[#234]"><span className="font-medium">AI</span></span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Problem → Approach → Results</p>
                    <a href="#contact" className="mt-3 inline-block text-sm font-medium text-[#01112B] hover:text-[#8BED02]">View details →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCards />
        <section id="about" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
              <p className="mt-3 text-slate-700">We’re a compact team of designers, marketers, and engineers who turn complex ideas into simple, effective systems. We believe in clarity, momentum, and measurable outcomes.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>• Strategy first. Execution always.</li>
                <li>• Ship weekly. Learn faster.</li>
                <li>• AI where it matters.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold">Our Process</h3>
              <ol className="mt-3 space-y-3 text-slate-700 list-decimal list-inside">
                <li>Discover and align on outcomes</li>
                <li>Prototype with real constraints</li>
                <li>Build, measure, iterate</li>
                <li>Scale with automation</li>
              </ol>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
