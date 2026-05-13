import React, { useState } from 'react';
import { Send, CheckCircle, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation of form submission
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
            <Send size={28} className="-ml-1 mt-1" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Let’s Figure Out <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">What’s Worth Building.</span>
          </h1>
          <p className="text-xl text-slate-600">
            Have an idea for an AI-powered solution, workflow automation, digital tool, website, or product? Tell us where you are, what you’re trying to solve, and what kind of support you need.
          </p>
          <p className="text-lg font-bold text-indigo-600 mt-4">
            We’ll help you determine the best next step.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSubmitted ? (
            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-indigo-100 text-center animate-in fade-in slide-in-from-bottom-4">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Message Received!</h3>
              <p className="text-lg text-slate-600 mb-8">
                Thank you for reaching out. We've received your information and will be in touch shortly to schedule a conversation.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 text-slate-600 font-medium bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
              <div className="mb-8 border-b border-slate-100 pb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Start the Conversation</h2>
                <p className="text-slate-600">
                  Use the form below to share a little about your organization and what you’re exploring. You don’t need to have it all figured out—that’s what our process is for.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Name <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="you@organization.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Organization / Business Name <span className="text-red-500">*</span></label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Company or project name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Website</label>
                    <input type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="https://" />
                  </div>
                </div>

                {/* Organization Type */}
                <div className="pt-6 border-t border-slate-100">
                  <label className="block text-sm font-semibold text-slate-900 mb-4">What type of organization are you?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Small business', 'Nonprofit', 'Community organization', 'Startup', 'Agency / partner', 'Other'].map((type) => (
                      <label key={type} className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50">
                        <input type="radio" name="orgType" className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" value={type} />
                        <span className="ml-3 text-sm font-medium text-slate-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Interest */}
                <div className="pt-6 border-t border-slate-100">
                  <label className="block text-sm font-semibold text-slate-900 mb-4">What are you interested in?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['AI Discovery Sprint', 'Workflow automation', 'Rapid prototype', 'Validation research', 'Website or branding', 'Not sure yet'].map((interest) => (
                      <label key={interest} className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50">
                        <input type="radio" name="interest" className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" value={interest} />
                        <span className="ml-3 text-sm font-medium text-slate-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Open Ended Questions */}
                <div className="pt-6 border-t border-slate-100 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">What problem are you trying to solve? <span className="text-red-500">*</span></label>
                    <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us about the challenges you're facing..."></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-4">Do you already have a solution idea?</label>
                    <div className="flex flex-wrap gap-4">
                      {['Yes', 'No', 'Sort of / still figuring it out'].map((opt) => (
                        <label key={opt} className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50 flex-1 min-w-[150px]">
                          <input type="radio" name="hasIdea" className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" value={opt} />
                          <span className="ml-3 text-sm font-medium text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">When are you hoping to start?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50 focus:bg-white">
                      <option value="" disabled selected>Select an option</option>
                      <option>Immediately</option>
                      <option>Within 30 days</option>
                      <option>1–3 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button type="submit" className="w-full py-4 px-6 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Closing Copy */}
          <div className="mt-12 bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center">
            <HelpCircle size={32} className="text-indigo-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">Not sure what you need yet? That’s okay.</h4>
            <p className="text-slate-600 max-w-lg mx-auto">
              Many of our clients come to us with a problem, a process, or an idea—not a finished plan. We’ll help you clarify what makes sense before you commit to building anything.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
