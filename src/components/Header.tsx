import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT ME', href: '#about-me' },
    { name: 'TOOLKIT', href: '#toolkit' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOGS', href: '#blogs' },
    { name: 'REACH OUT', href: '#contact' }, 
  ];

  return (
    <>
      <nav className='sticky top-0 z-[100] flex flex-row justify-between items-center px-6 md:px-10 py-6 bg-gray-900/80 backdrop-blur-md border-b border-white/5 shadow-lg'>
        <div className='font-heading text-lg text-brand-blue cursor-pointer'>
          <a href="#"> . SHRUTI /</a>
        </div>

        <div className='hidden md:flex flex-row gap-8'>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className='font-heading text-sm text-brand-blue hover:text-white transition-all'>
              {link.name}
            </a>
          ))}
        </div>

        {/* OPEN BUTTON (HAMBURGER) */}
        <button
          className='md:hidden text-brand-blue text-2xl z-[110]' 
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            {/* SIDE MENU */}
            <motion.div
              initial={{ x: '100%' }} 
              animate={{ x: 0 }}      
              exit={{ x: '100%' }}    
              transition={{ type: 'tween', duration: 0.3 }}
              style={{ backgroundColor: '#020617' }} 
              className='absolute top-0 right-0 w-[80%] max-w-[300px] h-full border-l border-white/10 p-10 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,1)]'
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-8">
                <button
                  className="text-brand-blue text-3xl p-2 hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
              
              {/* LINKS */}
              <div className="flex flex-col gap-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='text-2xl font-heading text-brand-blue hover:text-white transition-all'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header