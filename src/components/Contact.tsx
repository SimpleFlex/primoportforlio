import React, { useState, FormEvent } from 'react';

interface FormState {
  name: string;
  interest: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', interest: 'Software Development', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', interest: 'Software Development', message: '' });
  };

  const contactItems = [
    { icon: 'mail', label: 'Send an Email', value: 'hello@devprimo.com' },
    { icon: 'forum', label: 'Social Direct', value: '@dev_primo' },
  ];

  return (
    <section
      id="contact"
      className="px-5 md:px-6 max-w-[1280px] mx-auto reveal pb-32"
      style={{ marginTop: '120px' }}
    >
      <div className="glass-panel border border-[#564338]/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        {/* Background glow blob */}
        <div className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none"
          style={{ background: 'rgba(255,182,141,0.05)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="font-headline font-bold text-[32px] md:text-[56px] leading-[1.1] mb-8 tracking-tight">
              Let&rsquo;s build{' '}
              <br />
              <span className="text-primary glow-copper">the next big thing.</span>
            </h2>

            {/* Availability */}
            <div className="flex items-center gap-3 mb-12">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-body text-label tracking-wider text-[#ddc1b3] uppercase">
                Currently Available for hire
              </span>
            </div>

            {/* Contact rows */}
            <div className="space-y-6">
              {contactItems.map(({ icon, label, value }) => (
                <div key={icon} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#201f1f] border border-[#564338]/20 group-hover:border-primary/50 transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">{icon}</span>
                  </div>
                  <div>
                    <div className="text-[#ddc1b3] font-body text-[11px] uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-headline font-semibold text-xl">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#2a2a2a]/40 p-8 rounded-2xl border border-[#564338]/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[#ddc1b3] font-body text-[11px] uppercase tracking-widest mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#1c1b1b] border border-[#564338]/30 rounded-lg py-4 px-5 text-[#e5e2e1] font-body text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#ddc1b3]/20"
                />
              </div>
              <div>
                <label className="block text-[#ddc1b3] font-body text-[11px] uppercase tracking-widest mb-2">
                  Project Interest
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-[#1c1b1b] border border-[#564338]/30 rounded-lg py-4 px-5 text-[#e5e2e1] font-body text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  {['Software Development', 'Web Application', 'System Architecture', 'Collaboration'].map(
                    (opt) => <option key={opt}>{opt}</option>
                  )}
                </select>
              </div>
              <div>
                <label className="block text-[#ddc1b3] font-body text-[11px] uppercase tracking-widest mb-2">
                  The Mission
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your project vision..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-[#1c1b1b] border border-[#564338]/30 rounded-lg py-4 px-5 text-[#e5e2e1] font-body text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#ddc1b3]/20 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-[#532200] font-body text-label uppercase tracking-widest py-5 rounded-lg hover:shadow-[0_0_30px_rgba(255,182,141,0.2)] active:scale-95 transition-all"
              >
                {submitted ? '✓ Message Sent!' : 'Initialize Connection'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
