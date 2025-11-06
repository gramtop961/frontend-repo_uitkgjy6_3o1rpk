import { Rocket, Sparkles, Workflow, Database } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Branding & Design',
    text: 'Identity systems, visual language, and design ops that scale.'
  },
  {
    icon: Sparkles,
    title: 'Digital Marketing',
    text: 'Full-funnel strategy with performance creative and CRO.'
  },
  {
    icon: Workflow,
    title: 'AI Automation',
    text: 'From agents to workflows — automate the boring, amplify the creative.'
  },
  {
    icon: Database,
    title: 'AI Infrastructure',
    text: 'Data pipelines, vector search, and robust evaluation loops.'
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1622]">What we do</h2>
          <p className="mt-3 text-[#0B1622]/70">Large whitespace. Focused outcomes. Neon accents when it counts.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#01112B] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1622]">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
              <div className="mt-4 text-sm font-medium text-[#01112B]">
                <span className="group-hover:text-[#8BED02] transition">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
