import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Heart, Users, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Page Header */}
      <section className="relative pt-24 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            We Help Organizations Move From <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Ideas to Action.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Design2Action is a research, design, and strategy studio helping small businesses, nonprofits, and organizations navigate the new frontier of AI, automation, and digital solutions.
          </p>
          <p className="text-lg font-medium text-slate-700 bg-white inline-block px-6 py-3 rounded-full shadow-sm border border-slate-200">
            We help teams understand what problems are worth solving, what solutions are worth building, and how to move forward with confidence.
          </p>
        </div>
      </section>

      {/* Story, Philosophy, Purpose Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Our Story */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h3>
              <div className="space-y-4 text-slate-600">
                <p><strong>Design2Action was created for organizations that need more than a vendor.</strong></p>
                <p>We saw too many businesses and community-rooted organizations being sold websites, apps, automations, and software without a clear understanding of the problem first.</p>
                <p>In a time where AI tools are moving fast and everyone is promising transformation, we believe clarity matters more than ever.</p>
                <p>Our work sits at the intersection of research, design thinking, product strategy, and practical execution. We help organizations ask better questions, understand their users, map their workflows, test their ideas, and build solutions that are actually useful.</p>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden text-white transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
              <div className="w-14 h-14 bg-indigo-500/30 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Compass size={28} className="text-indigo-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">Our Philosophy</h3>
              <p className="text-indigo-300 font-bold mb-4 uppercase tracking-wider text-sm relative z-10">Research First. Action Always.</p>
              <div className="space-y-4 text-slate-300 relative z-10">
                <p>We believe research should lead to decisions—not sit in a report.</p>
                <p>Our process is designed to uncover what matters, align stakeholders, and move quickly toward practical outcomes.</p>
                <p>Whether we’re helping a nonprofit improve operations, a small business explore automation, or a team prototype a new AI-powered tool, our goal is the same:</p>
                <p className="font-semibold text-white text-lg mt-4 border-l-2 border-indigo-400 pl-4">Help people build the right thing, for the right reason, with confidence.</p>
              </div>
            </div>

            {/* Our Purpose */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart size={28} className="text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Purpose</h3>
              <p className="text-emerald-600 font-bold mb-4 uppercase tracking-wider text-sm">Built With Community in Mind</p>
              <div className="space-y-4 text-slate-600">
                <p>Our work is shaped by the communities we come from and the people we serve.</p>
                <p>We care about helping businesses, nonprofits, and organizations access the kind of strategy, research, and technology support that is often reserved for larger companies with bigger budgets.</p>
                <p>For us, AI and digital tools are not just trends. They are opportunities to help organizations work smarter, serve better, and create solutions that meet real needs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Meet the Team</h2>
            <p className="text-lg text-slate-600">
              Design2Action brings together research, design, product strategy, technology, and execution to help organizations move from uncertainty to action.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">Sowande</h3>
                <p className="text-indigo-600 font-semibold mb-4">Lead Software Developer / Backend Engineer / Technical Product Builder</p>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Sowande leads software architecture and backend development across the team’s digital products and client projects. He specializes in building scalable full-stack applications using technologies such as React Native, Node.js, NestJS, FastAPI, Prisma, Neon, MongoDB, and AWS cloud infrastructure. His experience spans API architecture, database design, serverless systems, AI-integrated applications, and mobile-first product development.
                </p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  With a strong focus on performance, scalability, and clean system design, Sowande helps startups, nonprofits, and growing brands transform ideas into production-ready platforms that are built to scale.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">Changa Rocc</h3>
                <p className="text-indigo-600 font-semibold mb-4">Founder / Product Strategist / Design Research Lead</p>
                <p className="text-slate-600 leading-relaxed">
                  Changa leads Design2Action’s research, strategy, and product direction. With deep experience in UX research, design thinking, product strategy, and community-centered problem solving, he helps organizations clarify what is worth building and how to move from idea to action.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900">SUBII</h3>
                <p className="text-indigo-600 font-semibold mb-4">Visual Design / Branding</p>
                <p className="text-slate-600 leading-relaxed">
                  Deep creative suite experience in Adobe Photoshop, Illustrator, Premiere Pro, and Canva for high-quality asset creation. Advanced use of AI productivity tools, file conversion software, and visual research for design strategy. Expertise in mood boarding and developing cohesive visual guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Have an Idea, Workflow, or Problem You’re Trying to Solve?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            We can help you figure out what makes sense before you spend time and money building the wrong thing.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-indigo-600 bg-white rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:-translate-y-1">
            Start a Conversation <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
}
