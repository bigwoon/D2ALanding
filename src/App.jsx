import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Layout, 
  Rocket, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Menu, 
  X, 
  Zap,
  Globe,
  Server,
  Calendar,
  Briefcase,
  ExternalLink,
  Clock,
  ChevronLeft
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1: Date/Time, 2: Details, 3: Success
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate next 14 weekdays for the calendar
  const availableDays = React.useMemo(() => {
    const days = [];
    let d = new Date();
    while (days.length < 14) {
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        days.push(new Date(d));
      }
      d.setDate(d.getDate() + 1);
    }
    return days;
  }, []);

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Reset modal state after fade-out animation completes
    setTimeout(() => {
      setBookingStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
    }, 300); 
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-indigo-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">
                D2A
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Dsgn<span className="text-indigo-600">2</span>Action
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About Us</a>
              <a href="#saas" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">SaaS</a>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-indigo-200">
                Start a Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-indigo-600">Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-indigo-600">Portfolio</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-indigo-600">About Us</a>
            <a href="#saas" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-slate-700 hover:text-indigo-600">SaaS Solutions</a>
            <button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg w-full">
              Start a Project
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10"></div>
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 -mr-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
                <Zap size={16} className="text-indigo-500" />
                <span>Web Design & SaaS Development</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                We Turn Visionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Designs</span> Into Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Actions.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Run by a dynamic family duo, Dsgn2Action builds high-converting websites and scalable SaaS products that drive real business results. Fast, reliable, and built for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 hover:-translate-y-1">
                  Schedule Consultation
                  <Calendar size={18} className="ml-2" />
                </button>
                <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1">
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl bg-white shadow-2xl shadow-slate-200/50 border border-slate-100 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 left-4 flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="mt-8 rounded-xl bg-slate-50 p-6 border border-slate-100 h-80 flex flex-col">
                  {/* Abstract Code/Design Mockup */}
                  <div className="flex gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <Layout size={32} className="text-indigo-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center bg-white">
                     <div className="text-center">
                        <Code size={48} className="mx-auto text-slate-300 mb-2" />
                        <p className="text-slate-400 font-mono text-sm">Building your success...</p>
                     </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 transform -rotate-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Rocket size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Deployment</p>
                    <p className="text-lg font-extrabold text-slate-900">100% Faster</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Logos / Trust Strip */}
      <section className="py-10 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Trusted by modern businesses & startups</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
             {/* Placeholder Logos */}
             <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24}/> TechFlow</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Server size={24}/> CloudSync</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Zap size={24}/> BoltDesign</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Users size={24}/> TeamScale</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">End-to-end digital solutions.</h3>
            <p className="text-lg text-slate-600">From the first wireframe to the final deployment, we handle the technical heavy lifting so you can focus on running your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <Layout size={28} className="text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Web Design</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Beautiful, intuitive, and user-centric designs. We craft digital experiences that capture your brand's essence and convert visitors into loyal customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-indigo-500 mr-2"/> UI/UX Design</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-indigo-500 mr-2"/> Wireframing & Prototyping</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-indigo-500 mr-2"/> Brand Identity</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Code size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Web Development</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Lightning-fast, responsive, and SEO-optimized websites. We write clean code that ensures your site performs flawlessly across all devices.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-blue-500 mr-2"/> Frontend (React, Vue)</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-blue-500 mr-2"/> CMS Integration</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-blue-500 mr-2"/> E-Commerce Solutions</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">CORE FOCUS</div>
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                <Server size={28} className="text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">SaaS Development</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Scalable, secure, and robust software architectures. Have an idea for a software product? We build it from the ground up to handle massive scale.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-cyan-500 mr-2"/> Custom Web Apps</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-cyan-500 mr-2"/> API Development</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle size={16} className="text-cyan-500 mr-2"/> Cloud Infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Recent Projects.</h3>
              <p className="text-lg text-slate-600">Take a look at some of the recent websites and SaaS platforms we've built for our clients.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              Start your project <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Grow104', 
                category: 'Non-Profit Operations Platform', 
                desc: 'A centralized system for non-profit management. Features custom workflows for volunteers and gardeners, powered by optimized AWS serverless architecture.', 
                tags: ['React', 'AWS Lambda', 'DynamoDB'], 
                image: '/project1.png'
              },
              { 
                title: 'GOVertical', 
                category: 'Mobile & Web Solutions', 
                desc: 'High-performance application designed for vertical growth and scalability, focusing on seamless user experience and robust backend logic.', 
                tags: ['Mobile First', 'Full-Stack', 'API'], 
                image: '/project2.png'
              },
              { 
                title: 'PocketBuilder', 
                category: 'Development Tooling', 
                desc: 'A specialized builder platform that puts powerful creation tools in the user\'s pocket, prioritizing rapid deployment and intuitive design.', 
                tags: ['SaaS', 'React Native', 'Firebase'], 
                image: '/project1.png'
              },
              { 
                title: 'MDT Landing', 
                category: 'Strategic Web Design', 
                desc: 'A modern brand presence built to establish authority and drive high-intent lead generation through optimized conversion paths.', 
                tags: ['UI/UX', 'Tailwind', 'Performance'], 
                image: '/project2.png'
              },
            ].map((project, idx) => (
              <div key={idx} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-2xl hover:border-indigo-300 transition-all duration-500">
                <div className="h-56 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <span className="text-white text-sm font-medium flex items-center gap-2">View Project <ExternalLink size={14} /></span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Family Business Angle */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Founder Image */}
              <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative shadow-2xl">
                 <img src="/founders.png" alt="Dsgn2Action Founders" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              {/* Experience Card */}
              <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/20">
                <p className="text-3xl font-extrabold text-indigo-600 mb-1">Generational</p>
                <p className="text-sm font-medium text-slate-600">Wisdom combined with cutting-edge tech skills.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">About Dsgn2Action</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Family Values.<br/>Enterprise-Grade Tech.</h3>
              <p className="text-lg text-slate-600 mb-6">
                We aren't a faceless agency. Dsgn2Action is run by a tight-knit father-and-child team. We built this company on the premise that old-school work ethic and modern software development belong together.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                My dad brings decades of business acumen, project management, and strategic thinking. I bring the latest in web development, UX design, and SaaS architecture. Together, we give you a boutique, highly personalized experience with the technical firepower of a large agency.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Direct Communication</h5>
                    <p className="text-sm text-slate-600 mt-1">No middle-men. You speak directly to the founders building your project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Rocket size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">Agile & Fast</h5>
                    <p className="text-sm text-slate-600 mt-1">Because we're a small team, we pivot quickly and deliver faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Feature Section (Highlighting their own products or capability) */}
      <section id="saas" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">SaaS Engineering</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6">Building platforms that scale to millions.</h3>
            <p className="text-lg text-slate-300">
              Whether you need us to build your SaaS MVP or you want to license one of our in-house solutions, we have the architecture ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Secure Auth', desc: 'Enterprise-grade user authentication & role management.' },
              { title: 'Payment Integrations', desc: 'Stripe & PayPal ready for subscriptions & usage billing.' },
              { title: 'Database Architecture', desc: 'Optimized NoSQL or SQL schemas for speed.' },
              { title: 'API & Webhooks', desc: 'Connect your app to the rest of the world seamlessly.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle size={20} className="text-indigo-400" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-indigo-200">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to turn your design into action?</h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Let's build something incredible together. Reach out today for a free consultation. We'll discuss your goals, our process, and see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 text-base font-bold text-indigo-600 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg">
                Schedule Consultation
              </button>
              <a href="mailto:hello@dsgn2action.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-indigo-500/30 border border-indigo-400/50 rounded-xl hover:bg-indigo-500/50 transition-all duration-300">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  D2A
                </div>
                <span className="font-extrabold text-lg tracking-tight text-slate-900">
                  Dsgn<span className="text-indigo-600">2</span>Action
                </span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm">
                A family-run development studio crafting beautiful websites and scalable SaaS solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">SaaS MVP</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">UI/UX Audits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Dsgn2Action. All rights reserved.
            </p>
            <div className="flex space-x-4 text-slate-400">
              {/* Social icons placeholders */}
              <a href="#" className="hover:text-indigo-600 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-indigo-600 transition-colors"><Code size={20} /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scheduling Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8 sm:my-0">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                {bookingStep === 1 && <><Calendar className="text-indigo-600" size={24} /> Select a Time</>}
                {bookingStep === 2 && <><Users className="text-indigo-600" size={24} /> Your Details</>}
                {bookingStep === 3 && <><CheckCircle className="text-indigo-600" size={24} /> Confirmed</>}
              </h3>
              <button 
                onClick={handleModalClose}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 sm:p-8">
              {bookingStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Calendar size={16} className="text-slate-400"/> Select Date
                    </h4>
                    {/* Horizontal scrolling date picker */}
                    <div className="flex gap-3 overflow-x-auto pb-4 snap-x scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                      {availableDays.map((date, i) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                          <button
                            key={i}
                            onClick={() => setSelectedDate(date)}
                            className={`snap-start shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl border transition-all duration-200 ${isSelected ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100 scale-105' : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-slate-50'}`}
                          >
                            <span className="text-xs font-medium uppercase mb-1">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                            <span className="text-xl font-bold">{date.getDate()}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Clock size={16} className="text-slate-400"/> Select Time
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-xl border text-sm font-medium transition-all ${isSelected ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:bg-slate-50'}`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button 
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setBookingStep(2)} 
                    className="w-full py-4 px-4 mt-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 disabled:shadow-none"
                  >
                    Continue <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {bookingStep === 2 && (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setBookingStep(3); }} 
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 mb-6 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                    <Calendar size={18} className="text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-900">
                      {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white">
                      <option>Web Design</option>
                      <option>Web Development</option>
                      <option>SaaS MVP</option>
                      <option>Other / Unsure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Brief Details</label>
                    <textarea required rows="3" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none" placeholder="Tell us a little bit about what you're building..."></textarea>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <button type="button" onClick={() => setBookingStep(1)} className="px-4 py-4 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center">
                      <ChevronLeft size={20} />
                    </button>
                    <button type="submit" className="flex-1 py-4 px-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
                      Confirm Booking <CheckCircle size={18} />
                    </button>
                  </div>
                </form>
              )}

              {bookingStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h4>
                  <p className="text-slate-600 mb-6">
                    We've scheduled your consultation for <strong>{selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {selectedTime}</strong>. We'll send a calendar invite shortly.
                  </p>
                  <button 
                    onClick={handleModalClose}
                    className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
