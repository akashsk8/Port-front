"use client"
import React from 'react'
import CPP from '../components/3375.png'
import Image from 'next/image'
import dataPromise from '../fetchingCPP'
function Main() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    dataPromise.then(fetchedData => setData(fetchedData));
  }, []);

  const handleClick = (index) => {
    // toggle if same index, otherwise open new one
    setActiveIndex(prev => (prev === index ? null : index));
  };

  React.useEffect(() => {
    if (activeIndex === null) return;
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.student-rank-btn') &&
        !e.target.closest('.student-rank-preview')
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center px-4 py-8 md:px-16 lg:px-32">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-10 mb-6">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-white text-center md:text-left text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">
            Programmes in C++ language
          </h1>
          <p className="text-gray-400 text-center md:text-left text-base md:text-lg mt-2">
            Some C++ programmes written by me.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={CPP}
            alt="C++ Programming"
            width={260}
            height={260}
            className="m-auto mt-5 md:mt-0 shadow-2xl rounded-lg border-4 border-gray-700"
          />
        </div>
      </div>

      <div className="flex flex-col items-center max-w-full mt-8 gap-2">
        {data.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className="max-w-full md:min-w-full">
              <div
                className={`student-rank-btn w-full max-w-2xl mb-1 rounded-lg shadow-lg border text-shadow-white hover:from-purple-800 hover:to-purple-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border-purple-700/30 cursor-pointer transition-all duration-200 ${
                  isActive ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => handleClick(index)}
                style={{ userSelect: 'none' }}
              >
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-white font-semibold text-lg">
                    {item.Name}
                  </span>
                  <svg
                    className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`student-rank-preview bg-gray-900 text-green-400 rounded-lg p-4 w-full max-w-2xl shadow-xl overflow-x-auto transition-all duration-500 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 max-h-[500px]'
                    : 'opacity-0 scale-95 max-h-0 pointer-events-none'
                }`}
                style={{ marginTop: isActive ? '0' : '-20px' }}
              >
                <pre className="whitespace-pre-wrap text-sm md:text-base font-mono">
                  {item.Code}
                </pre>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Main;