import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Zap, 
  HeartPulse, 
  Users, 
  CheckCircle2, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronDown, 
  Menu, 
  X,
  Clock,
  ShieldCheck,
  ArrowRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand rounded flex items-center justify-center transition-transform group-hover:rotate-12">
            <Dumbbell className="text-white" size={22} />
          </div>
          <span className="text-2xl font-display font-black tracking-tighter text-white">BEING<span className="text-brand">FIT</span></span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-white text-black text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded hover:bg-brand hover:text-white transition-all">
            Join
          </a>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-black uppercase tracking-tight text-zinc-300 hover:text-brand"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1. Hero Section - Fixed Overlap with pt-32 */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Gym" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-brand"></div>
              <span className="text-brand text-xs font-black uppercase tracking-[0.3em]">Chhatarpur, New Delhi</span>
            </div>
            <h1 className="heading-lg mb-8">
              Transform Your <br />
              <span className="text-brand">Limits</span> at Being Fit
            </h1>
            <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
              Experience the ultimate fitness journey in our premium 2-floor facility. Modern machines, expert trainers, and a community that pushes you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="btn-primary">Join The Club</a>
              <a href="#facilities" className="btn-outline">Explore Gym</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand p-10 rounded-2xl hidden xl:block">
              <p className="text-6xl font-display font-black text-white">02</p>
              <p className="text-xs font-black text-white/80 uppercase tracking-widest mt-2">Floors of Fitness</p>
            </div>
          </div>

          <div>
            <h2 className="heading-md">Premium Unisex <br />Fitness Facility</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Being Fit is Chhatarpur's premier fitness destination. Our modern **two-floor facility** is equipped with the latest imported machines and a dedicated CrossFit zone.
            </p>
            <p className="text-zinc-500 mb-12 leading-relaxed">
              We focus on results. From strength training to cardio and functional workouts, our certified trainers ensure you have the guidance needed to reach your peak performance.
            </p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12">
              {[
                'Certified Trainers', 
                'CrossFit Zone', 
                'Modern Machines', 
                'AC Environment', 
                'Separate Changing', 
                'Diet Guidance'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand" size={20} />
                  <span className="font-bold text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Section */}
      <section id="facilities" className="section-padding bg-zinc-900/30">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="heading-md">Our Facilities</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Everything you need for a complete workout experience.</p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: 'CrossFit Zone', desc: 'Dedicated area for high-intensity functional training.' },
            { icon: <Dumbbell />, title: 'Strength Area', desc: 'Latest imported machines and extensive free weights.' },
            { icon: <HeartPulse />, title: 'Cardio Hub', desc: 'Advanced treadmills, cycles, and rowers for endurance.' },
            { icon: <Users />, title: 'Unisex Gym', desc: 'A motivating environment for both men and women.' },
            { icon: <ShieldCheck />, title: 'Safe & Secure', desc: 'Secure lockers and separate changing rooms.' },
            { icon: <Clock />, title: 'Flexible Hours', desc: 'Open early morning to late night for your convenience.' },
          ].map((item, idx) => (
            <div key={idx} className="card-gym">
              <div className="text-brand mb-6">{item.icon}</div>
              <h3 className="text-xl font-display font-black uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trainers Section */}
      <section id="trainers" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="heading-md">Expert Coaching</h2>
          <p className="text-zinc-500">Certified professionals dedicated to your growth.</p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: 'Strength Training', desc: 'Build muscle and power with guided weightlifting.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
            { name: 'Fat Loss', desc: 'Customized cardio and metabolic conditioning.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
            { name: 'CrossFit', desc: 'Functional movements performed at high intensity.', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800' },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <h3 className="text-xl font-display font-black uppercase tracking-tight mb-2">{item.name}</h3>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="section-padding bg-zinc-900/20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {[
            { name: 'Ankit V.', text: 'The best gym in Chhatarpur. The 2-floor setup is spacious and the machines are top-notch.' },
            { name: 'Priya S.', text: 'Very beginner friendly. The trainers actually take time to explain the exercises properly.' },
            { name: 'Rahul N.', text: 'Amazing CrossFit zone. I have seen great results in my strength and stamina in just 3 months.' },
          ].map((t, i) => (
            <div key={i} className="bg-zinc-900 p-10 rounded-2xl border border-white/5">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand text-brand" />)}
              </div>
              <p className="text-zinc-400 italic mb-8 leading-relaxed">"{t.text}"</p>
              <span className="font-black uppercase tracking-widest text-xs text-brand">— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Section */}
      <section id="contact" className="section-padding bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="heading-md">Start Your <br />Journey Today</h2>
            <p className="text-zinc-500 mb-12 leading-relaxed">
              Visit us at Hargovind Enclave, Chhatarpur. Our team is ready to help you choose the right program for your fitness goals.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-brand">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-brand">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-1">Hours</p>
                  <p className="text-xl font-bold">5:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-2xl border border-white/5">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand transition-colors" />
                <input type="tel" placeholder="Phone" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand transition-colors" />
              </div>
              <textarea rows={4} placeholder="Message" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand transition-colors"></textarea>
              <button type="submit" className="btn-primary w-full">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-display font-black tracking-tighter text-white">BEING<span className="text-brand">FIT</span></span>
          </div>
          
          <div className="flex gap-8 text-xs font-black uppercase tracking-widest text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>

          <p className="text-xs text-zinc-700 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Being Fit Gym. Chhatarpur, New Delhi.
          </p>
        </div>
      </footer>
    </div>
  );
}
