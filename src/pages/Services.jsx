import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  Rocket,
  CheckCircle,
  Lightbulb,
  Target,
  Users
} from 'lucide-react';

export default function Services() {
  const coreOfferings = [
    {
      title: "AI Discovery Sprint",
      subtitle: "Find the Right AI Opportunity Before You Build",
      price: "Starting at $2,500",
      desc: "Designed for organizations that know AI, automation, or digital tools could help—but are not sure where to start. This sprint helps you understand what is worth building, what should be automated, what needs more research, and what should wait.",
      bestFor: [
        "Organizations exploring AI for the first time",
        "Teams with too many ideas and no clear priority",
        "Businesses with manual processes that feel inefficient",
        "Nonprofits trying to improve service delivery or internal operations",
        "Leaders who want clarity before investing in tools or development"
      ],
      whatWeDo: "We work with your team to understand your goals, pain points, workflows, users, and opportunities. From there, we identify where AI or digital solutions may create meaningful value.",
      deliverables: [
        "Problem and opportunity brief",
        "Workflow and pain point insights",
        "AI opportunity map",
        "Prioritized use case matrix",
        "Build / automate / defer recommendations",
        "Recommended next steps and roadmap"
      ],
      timeline: "1–2 weeks",
      pricingTiers: [
        { name: "Standard Discovery", price: "Starting at $2,500", desc: "For smaller teams with a focused problem or single workflow." },
        { name: "Expanded Discovery", price: "$5,000+", desc: "For organizations with multiple departments, stakeholders, workflows, or solution ideas to evaluate." }
      ],
      startingPoint: "This is the recommended first step for most new clients.",
      cta: "Start With Discovery",
      icon: Search,
      color: "indigo"
    },
    {
      title: "Workflow-to-AI Sprint",
      subtitle: "Turn a Painful Process Into a Smarter Workflow",
      price: "Starting at $3,500",
      desc: "Many organizations do not need a brand-new app right away. They need a better process. The Workflow-to-AI Sprint helps you identify a manual, repetitive, or inefficient workflow and redesign it with the right mix of AI, automation, tools, and human decision-making.",
      bestFor: [
        "Teams buried in repetitive administrative work",
        "Organizations using spreadsheets, email, and manual tracking to manage key processes",
        "Businesses with slow intake, onboarding, reporting, scheduling, or communication workflows",
        "Nonprofits that need to serve more people with limited staff capacity"
      ],
      whatWeDo: "We map your current process, identify bottlenecks, and design a future-state workflow that is easier to manage, easier to understand, and better supported by technology.",
      deliverables: [
        "Current-state workflow map",
        "Bottleneck and friction analysis",
        "Future-state AI-supported workflow",
        "Automation and tool recommendations",
        "Implementation plan",
        "Priority roadmap"
      ],
      timeline: "1–3 weeks",
      pricingTiers: [
        { name: "Standard Sprint", price: "Starting at $3,500", desc: "For one focused workflow, process, or operational pain point." },
        { name: "Advanced Workflow Sprint", price: "$7,500+", desc: "For more complex workflows involving multiple roles, tools, systems, departments, or automation paths." }
      ],
      startingPoint: "This is often the next step after discovery when the biggest opportunity is improving an internal process.",
      cta: "Improve a Workflow",
      icon: Workflow,
      color: "blue"
    },
    {
      title: "Rapid Prototype Sprint",
      subtitle: "Make Your Idea Tangible Before Full Development",
      price: "Starting at $5,000",
      desc: "Before you spend money building a full product, your team needs to see how the idea works. The Rapid Prototype Sprint turns your concept into a clickable or lightweight working prototype that can be reviewed, tested, and refined before deeper investment.",
      bestFor: [
        "Organizations with an AI or software idea but no working concept",
        "Teams that need stakeholder buy-in",
        "Founders who want to test an MVP direction",
        "Nonprofits or businesses exploring a new digital service",
        "Organizations preparing for funding, development, or internal approval"
      ],
      whatWeDo: "We clarify the product concept, define the user flow, prioritize the core features, and create a prototype that makes the solution easier to understand and evaluate.",
      deliverables: [
        "Product concept brief",
        "Core user flow",
        "Feature priority list",
        "Clickable prototype or lightweight working concept",
        "Prototype walkthrough",
        "Build recommendation"
      ],
      timeline: "2–4 weeks",
      pricingTiers: [
        { name: "Clickable Prototype", price: "Starting at $5,000", desc: "Best for early-stage ideas that need a clear, visual concept for review, testing, or stakeholder alignment." },
        { name: "Lightweight Working Prototype", price: "$8,500–$12,000+", desc: "Best for concepts that require basic AI functionality, automation, data flow, or no-code/low-code implementation." }
      ],
      startingPoint: "This is the right next step when discovery shows that an idea is promising but needs to be made visible before it can be validated or built.",
      cta: "Prototype an Idea",
      icon: Layers,
      color: "cyan"
    },
    {
      title: "Validation Sprint",
      subtitle: "Test the Concept Before You Commit",
      price: "Starting at $4,000",
      desc: "A solution may sound good in a meeting, but the real question is whether people understand it, trust it, and would actually use it. The Validation Sprint helps you test your idea with users, staff, customers, stakeholders, or community members before investing in a full build.",
      bestFor: [
        "Teams that need evidence before moving forward",
        "Organizations with a prototype that needs user feedback",
        "Businesses unsure whether customers will use or pay for a solution",
        "Nonprofits that need stakeholder input before launch",
        "Leaders trying to reduce risk before a major investment"
      ],
      whatWeDo: "We create a focused validation plan, conduct interviews or usability sessions, synthesize feedback, and recommend whether to move forward, revise, pause, or pivot.",
      deliverables: [
        "Validation research plan",
        "Interview or usability testing sessions",
        "Key findings summary",
        "Priority issues and recommendations",
        "Go / pivot / pause recommendation",
        "Updated product or service direction"
      ],
      timeline: "1–3 weeks",
      pricingTiers: [
        { name: "Focused Validation", price: "Starting at $4,000", desc: "For a focused validation sprint with a small number of users, customers, staff, or stakeholders." },
        { name: "Expanded Validation", price: "$7,500–$9,000+", desc: "For larger studies, multiple audience groups, stakeholder interviews, usability testing, or deeper synthesis." }
      ],
      startingPoint: "This is the right next step after a prototype, or when you already have a concept that needs real-world feedback.",
      cta: "Validate a Concept",
      icon: ShieldCheck,
      color: "emerald"
    },
    {
      title: "Build + Launch Support",
      subtitle: "Move From Validated Idea to Real-World Implementation",
      price: "Starting at $10,000",
      desc: "Once an idea has been clarified and validated, we help you move toward launch with the right scope, tools, roadmap, and execution plan. Depending on the project, we may help build the solution directly, support a no-code or low-code implementation, create a launch-ready website, prepare developer handoff documentation, or coordinate the build process.",
      bestFor: [
        "Organizations ready to implement a validated solution",
        "Teams that need help turning a prototype into an MVP",
        "Businesses launching a new AI-supported workflow or digital tool",
        "Nonprofits that need a practical launch plan",
        "Clients who need product requirements before bringing in developers"
      ],
      whatWeDo: "We help translate strategy and validation into execution. That may include product requirements, design direction, no-code implementation, QA review, launch planning, training, or handoff support.",
      deliverables: [
        "MVP scope & Product requirements",
        "Build roadmap & Launch checklist",
        "QA review",
        "Training or documentation",
        "Developer handoff package",
        "Post-launch optimization plan"
      ],
      timeline: "4–12 weeks, depending on scope",
      pricingTiers: [
        { name: "Launch Lite", price: "Starting at $10,000", desc: "Best for smaller implementations, no-code/low-code solutions, landing pages, workflow tools, or developer handoff packages." },
        { name: "MVP Build Support", price: "$15,000–$35,000+", desc: "Best for validated concepts that need deeper product design, development support, technical coordination, and launch planning." },
        { name: "Ongoing Optimization Retainer", price: "$2,500–$7,500/mo", desc: "Best for organizations that need continued iteration, research, product support, automation improvements, or post-launch optimization." }
      ],
      startingPoint: "This is the right step after discovery, prototyping, and validation have clarified what should be built and why.",
      cta: "Plan a Launch",
      icon: Rocket,
      color: "indigo"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              AI Strategy, Research, and Digital Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Built Around Real Problems</span>
            </h1>
            <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
              Design2Action helps small businesses, nonprofits, and organizations identify, validate, and launch practical AI-powered solutions.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-lg font-medium text-white mb-2">We do not start by asking, <span className="italic text-slate-400">“What do you want us to build?”</span></p>
              <p className="text-2xl font-bold text-indigo-400">We start by asking, “What problem is worth solving?”</p>
            </div>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              From AI discovery and workflow automation to rapid prototyping, validation, and launch support, our services are designed to help you move from uncertainty to confident action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:-translate-y-1">
                Start With an AI Discovery Sprint
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-slate-600 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-sm hover:-translate-y-1">
                Talk to Us About Your Idea
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-24 bg-indigo-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">How We Help</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Build What’s Worth Building</h3>
              <p className="text-lg text-slate-600 mb-8">
                AI is creating new opportunities for organizations of every size, but moving too quickly without clarity can lead to wasted money, confusing tools, and solutions people do not use.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
                <p className="font-bold text-indigo-900">We help you avoid building from hype and start building from evidence.</p>
              </div>
            </div>
            <div>
              <ul className="space-y-4">
                {[
                  "Identify where AI or automation can create real value",
                  "Understand your workflows, users, and operational pain points",
                  "Prioritize the right opportunities before investing in development",
                  "Prototype ideas quickly and affordably",
                  "Validate solutions with real people",
                  "Launch with a clear plan, scope, and next steps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle size={20} className="text-indigo-600 mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Our Core Offerings</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Start With Discovery. Then Move Into the Right Next Step.</h3>
            <p className="text-lg text-slate-600">
              Every engagement begins with clarity. The AI Discovery Sprint is our front-door offer because it helps us understand your goals, your workflows, and your highest-value opportunities before recommending a solution.
            </p>
          </div>

          <div className="space-y-20">
            {coreOfferings.map((offer, idx) => (
              <div key={idx} className="relative bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-${offer.color}-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -mr-20 -mt-20 pointer-events-none`}></div>
                
                <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-${offer.color}-100 flex items-center justify-center text-${offer.color}-600`}>
                        <offer.icon size={28} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900">{idx + 1}. {offer.title}</h4>
                        </div>
                        <p className="text-lg font-semibold text-slate-600 mt-1">{offer.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 leading-relaxed mb-8 text-lg">{offer.desc}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Target size={18} className="text-indigo-500"/> Best For:</h5>
                        <ul className="space-y-2">
                          {offer.bestFor.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-600">
                              <span className="text-indigo-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-indigo-500"/> What You Get:</h5>
                        <ul className="space-y-2">
                          {offer.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-600">
                              <span className="text-indigo-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200">
                      <p className="text-sm font-semibold text-slate-800 mb-1">When This Comes Next:</p>
                      <p className="text-sm text-slate-600">{offer.startingPoint}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                      <div className="mb-4 pb-4 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Base Price</p>
                        <p className="text-3xl font-black text-slate-900">{offer.price}</p>
                      </div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Pricing Tiers</p>
                      <div className="space-y-4">
                        {offer.pricingTiers.map((tier, i) => (
                          <div key={i}>
                            <p className="font-bold text-slate-800 text-sm flex justify-between">
                              <span>{tier.name}</span>
                              <span className="text-indigo-600">{tier.price}</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{tier.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Typical Timeline</p>
                        <p className="font-medium text-slate-800">{offer.timeline}</p>
                      </div>
                    </div>
                    
                    <Link to="/contact" className="flex items-center justify-center w-full py-4 text-white bg-slate-900 rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-md">
                      {offer.cta} <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Transparent Pricing for Every Stage</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We believe clarity should extend to pricing. Every engagement is scoped around the size of the problem, the complexity of the workflow, and the level of support needed.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-slate-700 text-slate-300 text-sm uppercase tracking-wider">
                    <th className="p-6 font-semibold">Service</th>
                    <th className="p-6 font-semibold">Starting Price</th>
                    <th className="p-6 font-semibold">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">AI Discovery Sprint</td>
                    <td className="p-6">$2,500</td>
                    <td className="p-6 text-slate-400">$2,500–$5,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">Workflow-to-AI Sprint</td>
                    <td className="p-6">$3,500</td>
                    <td className="p-6 text-slate-400">$3,500–$7,500+</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">Rapid Prototype Sprint</td>
                    <td className="p-6">$5,000</td>
                    <td className="p-6 text-slate-400">$5,000–$12,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">Validation Sprint</td>
                    <td className="p-6">$4,000</td>
                    <td className="p-6 text-slate-400">$4,000–$9,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">Build + Launch Support</td>
                    <td className="p-6">$10,000</td>
                    <td className="p-6 text-slate-400">$10,000–$35,000+</td>
                  </tr>
                  <tr className="hover:bg-slate-700/30 transition-colors">
                    <td className="p-6 font-medium text-indigo-300">Ongoing Optimization Retainer</td>
                    <td className="p-6">$2,500/month</td>
                    <td className="p-6 text-slate-400">$2,500–$7,500/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-slate-900/50 p-6 border-t border-slate-700 text-sm text-slate-400">
              <span className="font-semibold text-slate-300">Note:</span> Final pricing depends on scope, number of stakeholders, complexity of workflows, technical requirements, research needs, and implementation support.
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Services */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Supporting Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Additional Strategy, Design, and Digital Support</h3>
            <p className="text-lg text-slate-600">
              While our core work centers around AI discovery, workflow strategy, prototyping, validation, and launch, we also support organizations with related digital needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Product Design", desc: "We design digital products, platforms, websites, dashboards, and internal tools around real user needs.", price: "$5,000" },
              { title: "User Research", desc: "We conduct focused research to help organizations understand users, customers, staff, stakeholders, and communities.", price: "$4,000" },
              { title: "Branding", desc: "We help organizations clarify their identity, message, visual direction, and positioning.", price: "$2,500" },
              { title: "Website Design", desc: "We still design and build websites—especially when part of a larger strategy around growth or digital transformation.", price: "$1,500" },
              { title: "SEO & Content Strategy", desc: "We help organizations improve findability and clarity through SEO fundamentals, content strategy, and page structure.", price: "$1,500" }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{service.desc}</p>
                <p className="text-sm font-semibold text-indigo-600">Starting at {service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Workflow */}
      <section className="py-24 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">Our Philosophy</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">We Do Not Build From Hype. We Build From Clarity.</h3>
              <p className="text-lg text-slate-600 mb-6">AI is powerful, but it is not the answer to every problem.</p>
              <ul className="space-y-3 mb-6 font-medium text-slate-800">
                <li>• Sometimes the right solution is an automation.</li>
                <li>• Sometimes it is a better workflow.</li>
                <li>• Sometimes it is a prototype.</li>
                <li>• Sometimes it is a website.</li>
                <li>• Sometimes it is a software product.</li>
                <li>• <span className="text-indigo-600 font-bold">Sometimes the smartest move is to wait.</span></li>
              </ul>
              <p className="text-lg text-slate-600 font-semibold">
                Our job is to help you figure that out before you spend time and money building the wrong thing.
              </p>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8">How Engagements Typically Work</h3>
              <div className="space-y-6">
                {[
                  { title: "1. Start With a Conversation", desc: "We learn about your organization, your goals, and the problem you are trying to solve." },
                  { title: "2. Begin With Discovery", desc: "Most clients begin with the AI Discovery Sprint so we can understand the opportunity before recommending a solution." },
                  { title: "3. Choose the Right Next Step", desc: "Based on what we learn, we recommend workflow strategy, prototyping, validation, build support, or another focused path." },
                  { title: "4. Move With Confidence", desc: "You leave each phase with clear deliverables, practical recommendations, and a better understanding of what to do next." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Not Sure What You Need Yet? That’s Exactly Where We Start.
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            You do not need a finished plan before contacting us. Bring us the problem, the workflow, the idea, or the opportunity you are thinking about. We will help you clarify what is worth building, what is worth testing, and what should happen next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-600 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:-translate-y-1">
              Start With an AI Discovery Sprint
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-indigo-400 bg-indigo-700/30 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-sm hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
