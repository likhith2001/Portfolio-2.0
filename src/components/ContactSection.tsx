import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github, Send, ArrowUpRight, MessageCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const links = [
  { icon: Mail, label: "Email", value: "likhith2001@gmail.com", href: "mailto:likhith2001@gmail.com", color: "from-red-500/10 to-orange-500/10" },
  { icon: Linkedin, label: "LinkedIn", value: "likhith-varma-2001", href: "https://linkedin.com/in/likhith-varma-2001", color: "from-blue-500/10 to-cyan-500/10" },
  { icon: Instagram, label: "Instagram", value: "likhith0102", href: "https://instagram.com/likhith0102", color: "from-pink-500/10 to-purple-500/10" },
  { icon: Github, label: "GitHub", value: "likhith2001", href: "https://github.com/likhith2001", color: "from-gray-500/10 to-slate-500/10" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const isValidName = (name: string) => name.trim().length >= 2 && /^[a-zA-Z\s'-]+$/.test(name.trim());
  const isValidSubject = (subject: string) => subject.trim().length >= 3;
  const isValidMessage = (message: string) => message.trim().length >= 10;

  const isFormValid = isValidName(form.name) && isValidEmail(form.email) && isValidSubject(form.subject) && isValidMessage(form.message);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_fj0m33e",
        "template_fao72mc",
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        "3D_pspuWM4gVi25ke"
      );
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and build something great together</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 group relative overflow-hidden hover-lift"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon size={20} className="text-primary" />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
              <p className="text-sm text-foreground font-semibold group-hover:text-primary transition-colors">{link.value}</p>
            </div>
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground">I'll get back to you as soon as possible</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input type="text" placeholder="Your Name (letters only, min 2)" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-secondary/80 border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all ${form.name && !isValidName(form.name) ? "border-destructive" : "border-border"}`} />
                  {form.name && !isValidName(form.name) && <p className="text-xs text-destructive mt-1">Enter a valid name (letters only, min 2 chars)</p>}
                </div>
                <div>
                  <input type="email" placeholder="Your Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-secondary/80 border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all ${form.email && !isValidEmail(form.email) ? "border-destructive" : "border-border"}`} />
                  {form.email && !isValidEmail(form.email) && <p className="text-xs text-destructive mt-1">Enter a valid email address</p>}
                </div>
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Subject (min 3 characters)" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-secondary/80 border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all ${form.subject && !isValidSubject(form.subject) ? "border-destructive" : "border-border"}`} />
                {form.subject && !isValidSubject(form.subject) && <p className="text-xs text-destructive mt-1">Subject must be at least 3 characters</p>}
              </div>
              <div className="mb-6">
                <textarea placeholder="Your Message (min 10 characters)" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`w-full px-4 py-3 rounded-xl bg-secondary/80 border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none ${form.message && !isValidMessage(form.message) ? "border-destructive" : "border-border"}`} />
                {form.message && !isValidMessage(form.message) && <p className="text-xs text-destructive mt-1">Message must be at least 10 characters</p>}
              </div>
              <button
                type="submit"
                disabled={sending || !isFormValid}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      <div className="text-center mt-16 pt-8 border-t border-border/50">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Likhith Varma.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
