import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './bg4.png'; // Ensure the correct path to your bg.png
import bewareImage from './beware.png'; // Ensure the correct path to your beware.png
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";
import { cn } from "./lib/utils";
import { AnimatedList } from './animated-list';
import Marquee from "react-fast-marquee"; 

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
  </svg>
);

function App() {
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const audioRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText('4HDMjq6YBHX7F2BhZ1tNUb3kLj91kopzm8EbAkKHpump');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  const handleEnter = () => {
    setModalVisible(false);
    audioRef.current.play();
  };

  const springConfig = { stiffness: 300, damping: 30 };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-zinc-950 overflow-clip relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <audio ref={audioRef} src="https://ia803205.us.archive.org/26/items/rage-against-the-machine-killing-in-the-name/Rage%20Against%20The%20Machine%20-%20Killing%20In%20The%20Name.mp3" /> {/* Ensure the correct path to your audio file */}
      
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <div className="flex items-center justify-center p-10">
              <button 
                onClick={handleEnter} 
                className="bg-[#ff3737] md:hover:bg-red-700 transition ease-in-out duration-150 text-white p-6 text-6xl font-custom"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute top-7 left-7 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/solanaraging" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-12 h-12" />
          </a>
          <a href="https://t.me/solanarage" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-12 h-12" />
          </a>
        </div>
      </div>

      <motion.img
        className='absolute -right-10 -bottom-10'
        src="rage.png"
        alt="Rage"
        animate={{
          x: [-7, 7, -5, 9, -4], // Movement back and forth
          transition: {
            repeat: Infinity, // Repeat forever
            duration: 0.1, // Duration for each movement
          },
        }}
      />
      
      <div className='absolute bottom-10 flex justify-center'>
        <div className='flex flex-col sm:flex-row justify-center bg-slate-100 z-10 items-center gap-1 md:gap-4 px-5 py-3 max-w-full border-2 border-red-500'>
          <button
            onClick={handleCopy}
            className="text-sm bg-red-500 text-white py-2 px-4 md:hover:bg-red-700 transition-colors duration-300 z-10 whitespace-nowrap"
          >
            {copied ? 'Copied!' : <CopyIcon />}
          </button>
          <div className='text-xs sm:text-sm md:text-base overflow-x-auto whitespace-nowrap'>
            4HDMjq6YBHX7F2BhZ1tNUb3kLj91kopzm8EbAkKHpump
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;