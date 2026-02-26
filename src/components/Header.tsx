import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT ME', href: '#about-me' },
    { name: 'TOOLKIT', href: '#' },
    { name: 'PROJECTS', href: '#' },
    { name: 'BLOGS', href: '#' },
    { name: 'REACH OUT', href: '#' },
  ];

  return (
    <nav className='sticky top-0 z-[100] flex flex-row justify-between items-center px-6 md:px-10 py-6 bg-gray-900/80 backdrop-blur-md border-b border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.4)]'>

      {/* LOGO */}
      <div className='relative group font-heading text-lg text-brand-blue cursor-pointer'>
        <a href="#"> . SHRUTI /</a>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-500 ease-out group-hover:w-full"></span>
      </div>

      {/* DESKTOP NAV (Hidden on Mobile) */}
      <div className='hidden md:flex flex-row gap-8'>
        {navLinks.map((link) => (
          <div key={link.name} className='relative group font-heading text-sm text-brand-blue cursor-pointer'>
            <a href={link.href}>{link.name}</a>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-500 ease-out group-hover:w-full"></span>
          </div>
        ))}
      </div>

      {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
      <button
        className='md:hidden text-brand-blue text-2xl focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm md:hidden"
            />
            {/*side menu*/}
            <motion.div
              initial={{ x: '100%' }} 
              animate={{ x: 0 }}      
              exit={{ x: '100%' }}    
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 z-[120] w-[75%] max-w-[300px] h-full bg-gray-950 border-l border-white/10 p-10 flex flex-col gap-8 md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)]'
            >
              <button
                className="self-end text-brand-blue text-3xl mb-4"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-xl font-heading text-brand-blue hover:text-white transition-all'
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Header