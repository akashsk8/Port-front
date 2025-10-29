import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import devloper from '../components/3420.jpg'

function page() {
  const languages = [
    { name: 'Java', href: '/Java' },
    { name: 'Python', href: '/Python' },
    { name: 'C', href: '/C' },
    { name: 'C++', href: '/CPP' },
  ];
  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 
    'Express.js', 'MongoDB', 'Git & GitHub', 'Responsive Design', 
    'RESTful APIs', 'Java', 'Python', 'C & C++'
  ];
  return (
    <div className="min-h-screen text-white px-4 py-12">
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 bg-gray-900/30 p-8 rounded-2xl shadow-xl border border-purple-700/20">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 flex-shrink-0">
            <Image
              src={devloper}
              alt="Developer Illustration"
              width={240}
              height={240}
              className="w-full h-full rounded-full border-4 border-purple-500/50 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
              MERN Stack Developer
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              I'm a passionate developer with expertise in building dynamic and responsive web applications using the MERN stack. I enjoy solving complex problems, collaborating with teams, and continuously learning new tools to stay ahead in the fast-evolving world of web development.
            </p>
            
            <div className="pt-4">
              <h3 className="font-semibold text-lg text-purple-300 mb-3">Other Languages I Work With:</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <Link href={lang.href} className="font-bold text-white transition-all duration-300 hover:text-purple-300 hover:drop-shadow-[0_0_5px_rgba(192,132,252,0.7)]">
                      {lang.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 bg-gray-900/30 p-8 rounded-2xl shadow-xl border border-purple-700/20 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            My Journey: Building a Foundation in Code 🏗️
          </h2>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300">💡 The Spark: Four Years of Self-Driven Growth</h3>
            <p className="text-gray-300 leading-relaxed">My path into development began four years ago and has been defined by passion and persistence. Driven by an intense curiosity for how technology works, I committed to formal training despite financial barriers preventing traditional college enrollment.</p>
            <p className="text-gray-300 leading-relaxed">I completed a Diploma in Computer Applications, a critical phase where I didn't just learn syntax—I mastered the real fundamentals of programming. This program instilled in me a rigorous approach to problem-solving and algorithmic thinking.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300">🧠 Foundational Breadth & Deep Dive into JavaScript</h3>
            <p className="text-gray-300 leading-relaxed">My technical foundation is broad and strong, a testament to seeking diverse knowledge:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li><span className="font-semibold text-gray-100">Core Fundamentals:</span> I built my core understanding through languages like C, C++, Java, and Python. This exposure provided me with a deep, transferable understanding of data structures, algorithms, and object-oriented programming (OOP).</li>
              <li><span className="font-semibold text-gray-100">The First Love:</span> However, my journey into the web truly ignited with JavaScript. Recognizing its power, I focused my energy on mastering the language that powers the modern web.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300">🌐 Transition to Full Stack & MERN Focus</h3>
            <p className="text-gray-300 leading-relaxed">I initially explored front-end development, building several engaging user interfaces. Yet, I quickly recognized the industry's need for comprehensive developers. Motivated by market demand and the desire to build and manage applications end-to-end, I made the decisive pivot to full-stack development.</p>
            <p className="text-gray-300 leading-relaxed">I have become a dedicated MERN Stack enthusiast, acquiring my skills entirely through YouTube tutorials and real-world projects. This self-taught experience has honed my ability to:</p>
            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
              <li>Design and architect scalable back-end APIs with Node.js and Express.</li>
              <li>Model and manage data using MongoDB.</li>
              <li>Build reactive, high-performance user interfaces using React.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300">🌟 What I Bring to the Table</h3>
            <p className="text-gray-300 leading-relaxed">My journey proves that I am a highly motivated, self-starter who embraces challenges. I bring a rare combination of broad programming fundamentals and specialized MERN Stack skills.</p>
            <p className="text-gray-300 leading-relaxed">I'm now ready to transition from self-learning to a collaborative environment, eager to apply my skills to professional projects and grow exponentially within a dynamic team.</p>
          </div>
        </div>
        <div className="mt-16 bg-gray-900/30 p-8 rounded-2xl shadow-xl border border-purple-700/20 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            My Skills
          </h2>
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center'>
            {skills.map((skill) => (
              <li 
                key={skill} 
                className="p-4 text-gray-200 font-bold text-shadow-purple-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            I'm currently seeking new opportunities to apply my MERN stack skills and contribute to exciting projects. If you have a project in mind, a role to fill, or just want to connect, I'd love to hear from you!
          </p>
          <Link href="/contact">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300">
              Get in Touch
            </span>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default page