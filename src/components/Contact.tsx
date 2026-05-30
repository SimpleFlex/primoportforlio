import React, { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  interest: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    interest: "Software Development",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_k8j8h6u",
        "template_be64kqf",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: form.interest,
          time: new Date().toLocaleString(),
        },
        "uTeT_1a49xDn1RuXn",
      )
      .then(() => {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          setForm({
            name: "",
            email: "",
            interest: "Software Development",
            message: "",
          });
        }, 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      });
  };

  const contactItems = [
    {
      icon: "mail",
      label: "Send an Email",
      value: "okonkwomakuochukwuelijah@gmail.com",
    },
    { icon: "forum", label: "Social Direct", value: "@primo_mind" },
  ];

  const renderButton = () => {
    switch (status) {
      case "loading":
        return (
          <button
            disabled
            className="w-full bg-primary/70 text-[#532200] font-body text-label uppercase tracking-widest py-5 rounded-lg cursor-not-allowed transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="flex gap-1">
                <span
                  className="w-2 h-2 bg-[#532200] rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 bg-[#532200] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-[#532200] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </span>
              Transmitting...
            </span>
          </button>
        );
      case "success":
        return (
          <button
            disabled
            className="w-full bg-green-500 text-white font-body text-label uppercase tracking-widest py-5 rounded-lg shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="text-lg">✓</span>
              Message Received — I'll be in touch!
            </span>
          </button>
        );
      case "error":
        return (
          <button
            disabled
            className="w-full bg-red-500/80 text-white font-body text-label uppercase tracking-widest py-5 rounded-lg shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <span>✕</span>
              Transmission Failed — Try Again
            </span>
          </button>
        );
      default:
        return (
          <button
            type="submit"
            className="w-full bg-primary text-[#532200] font-body text-label uppercase tracking-widest py-5 rounded-lg hover:shadow-[0_0_30px_rgba(255,182,141,0.2)] active:scale-95 transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                rocket_launch
              </span>
              Initialize Connection
            </span>
          </button>
        );
    }
  };

  return (
    <section
      id="contact"
      className="px-5 md:px-6 max-w-[1280px] mx-auto reveal pb-32"
      style={{ marginTop: "120px" }}
    >
      <div className="glass-panel border border-[#564338]/20 rounded-3xl p-8 md:p-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,182,141,0.05)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="font-headline font-bold text-[32px] md:text-[56px] leading-[1.1] mb-8 tracking-tight">
              Let&rsquo;s build <br />
              <span className="text-primary glow-copper">
                the next big thing.
              </span>
            </h2>

            <div className="flex items-center gap-3 mb-12">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-body text-label tracking-wider text-[#ddc1b3] uppercase">
                Currently Available for hire
              </span>
            </div>

            <div className="space-y-6">
              {contactItems.map(({ icon, label, value }) => (
                <div
                  key={icon}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#201f1f] border border-[#564338]/20 group-hover:border-primary/50 transition-all flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[#ddc1b3] font-body text-[11px] uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-headline font-semibold text-xl">
                      {value}
                    </div>
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
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  onChange={(e) =>
                    setForm({ ...form, interest: e.target.value })
                  }
                  className="w-full bg-[#1c1b1b] border border-[#564338]/30 rounded-lg py-4 px-5 text-[#e5e2e1] font-body text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  {[
                    "Software Development",
                    "Web Application",
                    "System Architecture",
                    "Collaboration",
                  ].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
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
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="w-full bg-[#1c1b1b] border border-[#564338]/30 rounded-lg py-4 px-5 text-[#e5e2e1] font-body text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#ddc1b3]/20 resize-none"
                />
              </div>
              {renderButton()}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
