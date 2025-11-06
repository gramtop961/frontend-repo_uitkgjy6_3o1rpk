import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      // In this sandbox, just simulate success. In full app, call Next.js API route with captcha + Supabase.
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ ok: true, msg: "Thanks — we’ll be in touch within 24h." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1622]">Let’s build something intelligent</h2>
            <p className="mt-3 text-slate-600">Tell us about your goals. We’ll come back with a clear plan, timeline, and pricing.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>• Response within 24 hours</li>
              <li>• No spam. No fluff. Just clarity.</li>
              <li>• NDA friendly</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required name="name" className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone (optional)</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Budget (optional)</label>
                <input name="budget" className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-[#8BED02] focus:ring-[#8BED02]" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input required type="checkbox" id="policy" className="h-4 w-4 rounded border-slate-300 text-[#8BED02] focus:ring-[#8BED02]" />
                <label htmlFor="policy" className="text-sm text-slate-600">I agree to the data policy.</label>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#8BED02] px-4 py-3 text-sm font-semibold text-[#01112B] shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8BED02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
