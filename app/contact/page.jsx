import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white px-4 py-12">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Get in Touch
        </h1>

        <div className="max-w-2xl mx-auto bg-gray-900/30 p-8 rounded-2xl shadow-xl border border-purple-700/20">
          <p className="text-center text-gray-300 text-lg mb-8">
            Have a question, a project proposal, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
          
          <form action="https://port-back-chi.vercel.app/Send" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                required
                className="w-full p-3 bg-gray-800/50 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                required
                className="w-full p-3 bg-gray-800/50 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                required
                rows="5"
                className="w-full p-3 bg-gray-800/50 border border-purple-700/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow border-t border-purple-700/30"></div>
            <span className="px-4 text-gray-400 text-lg">Or Connect Directly</span>
            <div className="flex-grow border-t border-purple-700/30"></div>
          </div>
          <div className="flex justify-center gap-6 md:gap-8">
            <a href="https://wa.me/+918617228648" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.5 15.3c-.28-.14-1.65-.81-1.9-.91-.25-.09-.44-.14-.62.14-.18.28-.72.91-.88 1.1-.16.18-.32.21-.59.06-.28-.14-1.18-.44-2.25-1.39-1.07-.95-1.79-2.12-2-2.48-.21-.36-.02-.56.12-.7.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.23-.55-.46-.48-.62-.48-.16 0-.35-.02-.53-.02s-.46.07-.7.35c-.24.28-.92 1.09-.92 2.65s.94 3.08 1.07 3.3.92 2.91 4.25 4.74c2.1.93 2.8.99 3.6.87.9-.14 1.65-.68 1.88-1.36.24-.68.24-1.25.17-1.36-.07-.11-.25-.18-.52-.32z"/></svg>
            </a>
            <a href="https://github.com/akashsk8" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.188 22 16.437 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="mailto:khanakash8697@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="https://x.com/JUMMANSk10" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.86-2.72 1.05a4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.72c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.44 4.2c-.64.17-1.32.2-2 .08a4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 18.58a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.72 8.72 0 0 0 24 5.1a8.5 8.5 0 0 1-2.54.7z"/></svg>
            </a>
          </div>
        </div>
        <div className='mt-20 text-center md:text-left'>
         <h2 className="text-2xl font-bold text-gray-300 mb-4">Thank You for Reaching Out</h2>
         <p className="text-gray-400 md:text-left">I am here to answer you with any questions or concerns. Feel free to reach out anytime.</p>
        </div>
      </main>
    </div>
  );
}
