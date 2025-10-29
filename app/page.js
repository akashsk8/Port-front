"use client"
import Image from "next/image";
import devloper from './components/3248.png'
import "./globals.css"
import Dp from './components/3418.jpg'
import React from 'react'
import Java from './components/3373.jpg'
import C from './components/3374.png'
import CPP from './components/3375.png'
import Python from './components/3376.jpg'
import Link from "next/link";
export default function Home() {
  const [typedText, setTypedText] = React.useState("");
  const [fade, setFade] = React.useState(true);
  const fullText = "Welcome to My Personal Website";
  React.useEffect(() => {
    let isMounted = true;
    function typeWriter(i) {
      if (!isMounted) return;
      setTypedText(fullText.slice(0, i));
      if (i <= fullText.length) {
        setTimeout(() => typeWriter(i + 1), 100); // slower typing
      } else {
        setFade(false); // start fade out
        setTimeout(() => {
          setTypedText("");
          setFade(true); // fade in
          setTimeout(() => typeWriter(1), 600); // slower fade in
        }, 10000); // slower fade out
      }
    }
    typeWriter(1);
    return () => { isMounted = false; };
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
      <main className="w-full max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full md:w-[92%] m-auto gap-8 md:gap-0 py-8">
          <div className="flex flex-col text-center md:text-left w-full md:w-2/3">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl min-h-20 md:min-h-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4 md:mb-6 animate-fade-in transition-opacity duration-1200 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {typedText}
              <span className="border-r-2 border-white animate-pulse ml-1" />
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-10 animate-fade-in delay-100">
              This is a personal website to showcase my projects.
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
            <div className="min-w-[100px] min-h-[100px] max-w-[180px] max-h-[200px] md:min-w-[160px] md:min-h-[160px] md:max-w-[220px] md:max-h-[220px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-700/30 to-gray-900/30 flex items-center justify-center">
              <Image src={Dp} alt="A" width={180} height={200} className="object-cover pt-7 rounded-xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-16">
          <div className="p-5 border-2 border-purple-500 rounded-xl text-white w-full md:w-2/3 h-fit mt-4 font-bold shadow-lg bg-gradient-to-br from-purple-800/40 to-gray-900/60 animate-fade-in delay-200">
            I am a passionate MERN stack developer with expertise in building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences and scalable solutions. I enjoy solving complex problems, collaborating with teams, and continuously learning new tools and frameworks to stay ahead in the fast-evolving world of web development.
          </div>
          <div className='w-full md:w-1/3 flex justify-center mt-4 animate-fade-in delay-300'>
            <div className="transition-transform duration-500 hover:scale-110 hover:rotate-3">
              <Image src={devloper} alt="developer" width={400} height={400} className="rounded-full shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white mx-1 mt-10 text-3xl text-center md:text-left">Some other language Programmes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-white text-2xl">
            <div className="flex flex-col items-center justify-center px-6 py-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-40">
              <Image src={Java} alt="Java" fill className="absolute inset-0 object-cover z-0" />
              <div className="absolute inset-0 bg-black/50 z-0" />
              <span className="mb-4 z-10 text-white font-bold text-2xl drop-shadow-lg">Java</span>
              <Link href="/Java" className="z-10 mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">See Now</Link>
            </div>
            {/* C */}
            <div className="flex flex-col items-center justify-center px-6 py-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-40">
              <Image src={C} alt="C" fill className="absolute inset-0 object-cover z-0" />
              <div className="absolute inset-0 bg-black/50 z-0" />
              <span className="mb-4 z-10 text-white font-bold text-2xl drop-shadow-lg">C</span>
              <Link href='/C' className="z-10 mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">See Now</Link>
            </div>
            {/* C++ */}
            <div className="flex flex-col items-center justify-center px-6 py-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-40">
              <Image src={CPP} alt="C++" fill className="absolute inset-0 object-cover z-0" />
              <div className="absolute inset-0 bg-black/50 z-0" />
              <span className="mb-4 z-10 text-white font-bold text-2xl drop-shadow-lg">C++</span>
              <Link href='/CPP' className="z-10 mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">See Now</Link>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center justify-center px-6 py-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden min-h-40">
              <Image src={Python} alt="Python" fill className="absolute inset-0 object-cover z-0" />
              <div className="absolute inset-0 bg-black/50 z-0" />
              <span className="mb-4 z-10 text-white font-bold text-2xl drop-shadow-lg">Python</span>
              <Link href='/Python' className="z-10 mt-4 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow hover:from-purple-700 hover:to-purple-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400">See Now</Link>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
