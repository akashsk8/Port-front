import React from 'react'
import Image from 'next/image';
import Dp from './3420.jpg'
export default function footer() {
        return (
          <footer className="bg-gradient-to-r from-purple-900 via-gray-900 to-purple-800 text-white py-8 mt-12 shadow-inner">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
              <div className="flex items-center gap-1 mb-2 md:mb-0">
                <Image
                    src={Dp}
                    alt="logo"
                    width={36}
                    height={36}
                    className="rounded-full bg-white shadow-md border border-purple-400"
                    style={{ width: '36px', height: '36px' }}
                  />
                <span className="font-bold text-lg tracking-wide">JummanSk</span>
              </div>
              <div className="flex gap-4 mb-2 md:mb-0">
                <a href="https://github.com/akashsk8" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-purple-400 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.188 22 16.437 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
                </a>
                <a href="https://twitter.com/JUMMANSk10" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-purple-400 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99-3.57-.18-6.74-1.89-8.86-4.49-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.09 1.49 3.83 3.47 4.23-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 5.1a8.48 8.48 0 0 1-2.54.7z"/></svg>
                </a>
                <a href="mailto:khanakash8697@gmail.com" aria-label="Email" className="hover:text-purple-400 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8.5V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5l9 5.5 9-5.5zm-9-3L3 8.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.5L12 5.5z"/></svg>
                </a>
              </div>
              <div className="text-center text-sm text-gray-300">
                <p>&copy; {new Date().getFullYear()} JummanSk. All rights reserved.</p>
              </div>
            </div>
          </footer>
        );
      }