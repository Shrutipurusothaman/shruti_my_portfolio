import swiggy from "../assets/swiggy-clone-img.png";
import invoice from "../assets/invoice-img.png";

const projects = [
  {
    name: "Swiggy E-Commerce clone",
    image: swiggy,
    desc: "A mobile-friendly food delivery platform featuring a real-time Add to Cart system and automated price calculations.",
    learnings: "Understood the complex calculations,event handling and mobile responsivess is what matters the in User Experience",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://swiggy-website-clone-001.netlify.app/"
  },
  {
    name: "INVOICE GENERATOR",
    image: invoice,
    desc: "A digital billing tool that automates tax, discount, and sub-total calculations for professional business use.",
    learnings: "Strengthened my logic-handling in JavaScript and learned how to manage complex user-input validation.",
    tech: ["HTML", "TAILWIND", "JAVASCRIPT"],
    link: "https://invoice-generator-vert-nine.vercel.app/"
  },
  {
    name: "REACT PORTFOLIO",
    image: "/project2.jpg",
    desc: "An interactive Portfolio built with React and TypeScript to showcase my technical identity and projects.",
    learnings: "Strengthened my TypeScript for type-safe code and explored advanced CSS animations to make the UI feel alive.",
    tech: ["REACT", "TYPESCRIPT", "TAILWIND"],
    link: "#"
  },
   {
    name: "FEEDBACK MANAGEMENT SYSTEM",
    image: "/project2.jpg",
    desc: "A full-stack application for collecting and organizing user feedback using a React frontend and a Laravel backend",
    learnings: "Learned the Full-Stack handshake—connecting a decoupled frontend to a backend API and managing database CRUD operations.",
    tech: ["REACT", "LARAVEL", "MYSQL"],
    link: "#"
  }
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16">
          <span className="text-brand-blue font-mono text-xs tracking-[0.5em] uppercase">Featured_Work</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4 tracking-tighter italic">
            PROJECT <span className="text-brand-blue">ARCHIVE.</span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col lg:flex-row gap-10 items-center">
              
              {/* 1. PREVIEW IMAGE */}
              <div className="relative w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-60"></div>
              </div>

              {/* 2. PROJECT DETAILS */}
              <div className="w-full lg:w-1/2">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-brand-blue border px-2 py-1 rounded-md bg-brand-blue/5">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl font-bold text-white mb-4">{project.name}</h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* 3. LEARNINGS SECTION */}
                <div className="bg-white/5 border-l-2 border-brand-blue p-5 rounded-r-2xl mb-8">
                  <h4 className="text-brand-blue font-mono text-xs uppercase tracking-widest mb-2">Key Learnings</h4>
                  <p className="text-slate-300 text-sm italic font-light">
                    "{project.learnings}"
                  </p>
                </div>

                {/* 4. GLOWING BUTTON */}
                <a 
                  href={project.link}
                  className="inline-block px-8 py-4 bg-brand-blue text-slate-950 font-black rounded-xl 
                             shadow-[0_0_20px_rgba(39,245,235,0.4)] hover:shadow-[0_0_35px_rgba(39,245,235,0.7)] 
                             hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-[0.2em]"
                >
                  View Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}