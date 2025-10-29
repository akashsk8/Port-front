import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NetFlix from '../components/NetFlix.png'
import YouMovies from '../components/Youmovies.png'
import WorkSpace from '../components/Workspace.png'
import UserPanel from '../components/UserPanel.png'
const ProjectPage = () => {
  return (
    <div className="min-h-screen text-white px-4 py-12">
  <main className="max-w-6xl mx-auto">
    {/* Main Title */}
    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
      My Projects
    </h1>

    {/* Secondary Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
        Professional and Clear
      </h2>
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        Explore a collection of my web development projects showcasing creativity, clean design, and efficient code. 
        Each project reflects my skills in front-end and back-end technologies.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-gray-900/30 border border-purple-700/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
        <Image
          src={NetFlix}
          alt="NetFlix Clone"
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-purple-300">
            NetFlix Clone
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A feature-rich streaming clone built with Next.js — showcasing my
            ability to replicate real-world interfaces and functionality.
          </p>
          <Link
            href="https://akashsk8.github.io/NetflixClone/"
            className="inline-block text-purple-400 font-semibold hover:text-pink-400 transition-all duration-300"
          >
            See Project →
          </Link>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-gray-900/30 border border-purple-700/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
        <Image
          src={YouMovies}
          alt="YouMovies"
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-purple-300">
            YouMovies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A movie discovery app that highlights my expertise in building
            responsive, data-driven UI with Next.js.
          </p>
          <Link
            href="https://akashsk8.github.io/YouMovies/"
            className="inline-block text-purple-400 font-semibold hover:text-pink-400 transition-all duration-300"
          >
            See Project →
          </Link>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-gray-900/30 border border-purple-700/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
        <Image
          src={WorkSpace}
          alt="WorkSpace"
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-purple-300">
            WorkSpace — Google Sheets Style
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A challenge project inspired by Google Sheets, built to test UI
            precision and grid layout handling. (Currently non-responsive)
          </p>
          <Link
            href="https://akashsk8.github.io/WorkSpace/"
            className="inline-block text-purple-400 font-semibold hover:text-pink-400 transition-all duration-300"
          >
            See Project →
          </Link>
        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-gray-900/30 border border-purple-700/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
        <Image
          src={UserPanel}
          alt="User Panel Dashboard"
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-purple-300">
            User Panel Dashboard
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A full-stack user management system built to handle data storage,
            updates, and authentication — showcasing complete MERN capabilities.
          </p>
          <Link
            href="https://user-panel-4mvd.onrender.com/"
            className="inline-block text-purple-400 font-semibold hover:text-pink-400 transition-all duration-300"
          >
            See Project →
          </Link>
        </div>
      </div>
    </div>
  </main>
</div>
  )
}

export default ProjectPage