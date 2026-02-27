import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5 py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand/Copyright */}
        <div className="text-center md:text-left">
          <p className="text-white font-heading text-lg mb-1">
            . SHRUTI /
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center: Built With */}
        <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">
          Built with <span className="text-brand-blue">React</span> & <span className="text-brand-blue">Tailwind</span>
        </div>

        {/* Right Side: Back to Top */}
        <motion.button
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 text-brand-blue text-sm font-bold cursor-pointer"
        >
          <span className="p-2 border border-brand-blue/30 rounded-full group-hover:border-brand-blue group-hover:bg-brand-blue/10 transition-all">
            ↑
          </span>
          BACK TO TOP
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;