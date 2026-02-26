import React from 'react'
import myPic from '../assets/My-picture.jpg'
import { useState } from 'react';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about-me');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="about-me" className="relative min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden px-6 py-12">

      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <h1 className="text-[16vw] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          CREATIVE DEVELOPER
        </h1>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8">

        {/* 2. PHOTO CONTAINER  */}
        <div className="relative z-10 w-full max-w-[320px] lg:max-w-[380px] aspect-[3/4] group">
          <div className="absolute inset-0 border-2 border-brand-blue/20 rounded-[1.5rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
          <div className="relative h-full w-full bg-slate-800 rounded-[1.5rem] overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-700 border border-white/5">
            <img
              src={myPic}
              className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 group-hover:scale-100"
              alt="Profile"
            />
            {/*scanning line*/}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue shadow-[0_0_15px_#27F5EB] animate-[scan_4s_linear_infinite]"></div>
          </div>
        </div>

        <div className="relative z-20 mt-[-40px] md:mt-0 md:ml-[-80px] w-full max-w-xl">
          <div className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-[2rem] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1.5px] w-10 bg-brand-blue"></span>
              <span className="text-brand-blue font-mono text-[10px] tracking-[0.4em] uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              SHRUTI<span className="text-brand-blue">.</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
              I don't just write code; I build <span className="text-white font-medium italic">digital atmospheres</span>.
              Currently crafting sleek interfaces where every pixel serves a purpose.
            </p>

            {/*skill side*/}
            <div className="flex flex-wrap gap-3">
              {['TECH ENTHUSIAST', 'CURIOSITY-DRIVEN', 'VISUAL STORYTELLER'].map((skill) => (
                <div key={skill} className="px-4 py-2 bg-white/5 rounded-full text-[11px] font-medium text-slate-400 border border-white/5 hover:border-brand-blue/40 transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/*Scroll Down Button*/}
          <div className='flex flex-row justify-center mt-5 '>
            <button className='bg-brand-blue p-3 text-slate-900 font-bold text-md rounded-lg hover:cursor-pointer hover:shadow-[0_0_20px_#27F5EB] transition-all'
              onClick={scrollToNext}
            >
              Keep Exploring ↓
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </section>
  )
}

export default HeroSection