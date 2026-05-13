import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Settings, 
  Zap, 
  CheckCircle, 
  Users, 
  Search,
  Layout,
  BarChart,
  ShieldCheck
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-slate-50 -z-10"></div>
        
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-semibold text-slate-700 mb-8 transform transition hover:scale-105">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Strategic Technology Consulting
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Build the Right AI Solution <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Before You Invest</span> in the Wrong One.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Design2Action helps small businesses, nonprofits, and organizations use research, design thinking, and rapid prototyping to identify, validate, and launch practical AI-powered solutions.
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              Whether you’re trying to improve a workflow, automate a manual process, build a new digital tool, or understand where AI fits in your organization, we help you move from uncertainty to action with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 hover:-translate-y-1">
                Start With an AI Discovery Sprint
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 shadow-sm">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">The Problem</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                AI Is Moving Fast. That Doesn’t Mean You Should Build Blind.
              </h3>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Many organizations know AI could help them work smarter, serve people better, or reduce repetitive work—but they don’t always know where to start.
                </p>
                <p>
                  The risk is jumping straight into tools, automations, or custom software before the real problem is clear. That can lead to <strong className="text-slate-800 font-semibold">wasted money, confusing solutions, low adoption, and products that don’t actually solve the issue.</strong>
                </p>
                <p className="text-indigo-900 font-medium p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                  At Design2Action, we help you slow down just enough to make the right decision—then move quickly with purpose.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-[500px] rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 p-8 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>
                <div className="relative z-10 w-full max-w-sm space-y-4">
                   <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500"><Zap size={16}/></div>
                       <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                     </div>
                     <div className="h-2 bg-slate-100 rounded w-full mb-2"></div>
                     <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                   </div>
                   <div className="bg-white p-5 rounded-2xl shadow-md border border-indigo-100 transform rotate-1 scale-105">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><Target size={16}/></div>
                       <p className="font-bold text-slate-800 text-sm">Clarity Before Technology</p>
                     </div>
                     <p className="text-xs text-slate-500">Mapping the right workflow before writing a single line of code.</p>
                   </div>
                   <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform opacity-70">
                     <div className="flex items-center gap-3 mb-2">
                       <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500"><Settings size={16}/></div>
                       <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning / Point of View Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Lightbulb size={48} className="text-indigo-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Clarity Comes Before Technology.
          </h2>
          <div className="text-xl text-slate-300 space-y-6 leading-relaxed">
            <p>
              We believe the best digital solutions start with understanding people, workflows, and real business needs.
            </p>
            <p>
              That’s why our process is rooted in research, design thinking, and validation. Before we recommend a tool, prototype, automation, website, or software build, we work to understand <span className="text-white font-semibold border-b border-indigo-400">what problem needs to be solved</span> and what solution is actually worth pursuing.
            </p>
            <p className="pt-6 font-medium text-2xl text-white">
              We don’t use research to slow things down.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">We use it to prevent costly mistakes.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Offer Section */}
      <section className="py-24 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-16 lg:p-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                  Flagship Offer
                </div>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                  Start With the AI Discovery Sprint
                </h3>
                <p className="text-lg text-slate-600 mb-8">
                  Our front-door offer for organizations that want to explore AI, automation, or custom software—but need clarity before investing in a full build. In this sprint, we help you identify the best opportunities, prioritize what matters, and define a clear path forward.
                </p>
                
                <h4 className="font-bold text-slate-900 mb-4">What We Help You Answer:</h4>
                <ul className="space-y-3 mb-8">
                  {['Where can AI or automation create the most value?', 'What workflows are slowing your team down?', 'What solution is actually worth building?', 'What should be automated, redesigned, or left alone?', 'What is the smartest next step?'].map((q, i) => (
                    <li key={i} className="flex items-start text-slate-600">
                      <Search size={20} className="text-indigo-500 mr-3 shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-md">
                  Book a Discovery Conversation
                </Link>
              </div>
              
              <div className="bg-slate-50 p-10 md:p-16 lg:p-20 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-center">
                <h4 className="font-extrabold text-2xl text-slate-900 mb-8">What You Walk Away With:</h4>
                <div className="space-y-6">
                  {[
                    { icon: Target, title: 'A clear problem and opportunity brief' },
                    { icon: Settings, title: 'Workflow and pain point insights' },
                    { icon: CheckCircle, title: 'Prioritized AI/digital solution opportunities' },
                    { icon: ArrowRight, title: 'Recommended next steps' },
                    { icon: Layout, title: 'A practical roadmap for prototype, validation, or build' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mr-4 shrink-0">
                        <item.icon size={20} />
                      </div>
                      <span className="font-semibold text-slate-800">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Ladder / What Happens After */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Our Framework</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What Happens After Discovery</h3>
            <p className="text-lg text-slate-600">
              Every organization does not need the same solution. After discovery, we help you move into the right next step based on what your team actually needs.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              { num: '1', title: 'AI Discovery Sprint', desc: 'Find the right opportunity before you build. We help you understand where AI, automation, or digital tools can create real value for your organization.' },
              { num: '2', title: 'Workflow-to-AI Sprint', desc: 'Turn one painful process into a smarter workflow. We map your current process, identify bottlenecks, and design a future-state workflow supported by AI, automation, or better tools.' },
              { num: '3', title: 'Rapid Prototype Sprint', desc: 'Make the idea tangible before full development. We turn your concept into a clickable or lightweight working prototype so your team and stakeholders can see, test, and respond before deeper investment.' },
              { num: '4', title: 'Validation Sprint', desc: 'Test the concept before you commit. We gather feedback from users, customers, staff, or stakeholders to understand what works, what needs to change, and whether the solution is worth building.' },
              { num: '5', title: 'Build + Launch Support', desc: 'Move from validated idea to real-world implementation. We help you launch the right solution through no-code tools, websites, automations, MVP development support, or developer handoff.' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-black">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Our Process: From Unclear Idea to Confident Action</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Discover', desc: 'We start by understanding your organization, workflows, users, and opportunities to identify what problem is worth solving.' },
              { icon: Layout, title: 'Prototype', desc: 'We make the solution tangible through wireframes, clickable prototypes, lightweight builds, or workflow concepts.' },
              { icon: ShieldCheck, title: 'Validate', desc: 'We test assumptions with real users, staff, customers, or stakeholders before you invest heavily.' },
              { icon: Zap, title: 'Build', desc: 'We help you move forward with the right scope, tools, roadmap, and launch plan.' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-10"></div>}
                <div className="bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700 shadow-xl">
                  <step.icon size={28} className="text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold text-center mb-4">{step.title}</h4>
                <p className="text-slate-400 text-center text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Fast Isn’t the Same as Right</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Many agencies move quickly by jumping straight into design or development. We move quickly by making better decisions upfront.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-100 p-6 border-b border-slate-200">
              <div className="font-bold text-slate-500 text-center uppercase tracking-wider text-sm">Typical Fast Agency</div>
              <div className="font-bold text-indigo-700 text-center uppercase tracking-wider text-sm">Design2Action</div>
            </div>
            
            {[
              ['Starts with tools, templates, or assumptions', 'Starts with research, discovery, and clarity'],
              ['Asks, “What do you want us to build?”', 'Asks, “What problem is worth solving?”'],
              ['Moves quickly into execution', 'Moves intentionally into the right next step'],
              ['Treats research as optional', 'Uses research to reduce risk'],
              ['Measures success by launch speed', 'Measures success by usefulness, clarity, and adoption'],
              ['Often leads to rework after launch', 'Helps prevent wasted effort before launch']
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <div className="p-6 text-slate-500 text-center md:text-left flex items-center md:justify-start justify-center">
                  <X size={18} className="text-red-400 mr-3 hidden md:block shrink-0" />
                  <span className="text-sm md:text-base">{row[0]}</span>
                </div>
                <div className="p-6 text-slate-900 font-medium text-center md:text-left flex items-center md:justify-start justify-center bg-indigo-50/30">
                  <CheckCircle size={18} className="text-indigo-600 mr-3 hidden md:block shrink-0" />
                  <span className="text-sm md:text-base">{row[1]}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-2xl font-bold text-slate-900">
              Bottom line: We help you build with purpose—not just speed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden relative shadow-2xl">
                 {/* Abstract visual representing community and build */}
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-slate-200 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full opacity-60">
                      <div className="bg-white rounded-2xl shadow-sm"></div>
                      <div className="bg-indigo-200 rounded-2xl shadow-sm"></div>
                      <div className="bg-blue-100 rounded-2xl shadow-sm"></div>
                      <div className="bg-white rounded-2xl shadow-sm"></div>
                    </div>
                    <Users size={80} className="absolute text-indigo-900/20" />
                 </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Why Design2Action</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Built for Organizations That Can’t Afford Guesswork
              </h3>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Our work is shaped by the communities we come from and the organizations we serve.
                </p>
                <p>
                  We know what it means when resources are limited, timelines are real, and every investment has to matter. That’s why our process is designed to protect business owners and organizational leaders from wasted effort.
                </p>
                <p className="font-semibold text-slate-900">
                  We help teams make clearer decisions, move with confidence, and build solutions that are grounded in real needs—not hype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Ready to Explore What AI Could Actually Do for Your Organization?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Let’s start with a conversation. Whether you have a rough idea, a messy workflow, or a big vision for a new tool, we can help you figure out what is worth building—and what should happen next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-600 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:-translate-y-1">
              Get in Touch
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-indigo-400 bg-indigo-700/30 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-sm hover:-translate-y-1">
              Ask About the AI Discovery Sprint
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
