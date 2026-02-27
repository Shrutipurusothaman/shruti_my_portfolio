import { motion } from 'framer-motion';

const blogs = [
    {
        title:"Controlling & Collaborating sounds weird but it’s easy with Git and GitHub" ,
        date: "Jul 20, 2025",
        category: "Basics",
        excerpt: "From local setup to remote hosting: A comprehensive guide to mastering the essential Git commands for seamless version control and collaboration.",
        link: "https://medium.com/@shrutikishore04/controlling-collaborating-sounds-weird-but-its-easy-with-git-and-github-4b736292440f" 
    },
    {
        title: "From Sketches to Screens: Lessons in Thinking Like a Developer",
        date: "Jan 12, 2026",
        category: "Experience",
        excerpt: "Beyond the code editor: Discovering how to break complex problems into manageable steps and why thinking on paper is the developer's greatest tool.",
        link: "https://medium.com/@shrutikishore04/from-sketches-to-screens-lessons-in-thinking-like-a-developer-739791713142"
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="py-20 px-6 md:px-10 bg-[#111827]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="font-heading text-4xl text-white mb-2">LATEST WRITINGS</h2>
                    <div className="w-20 h-1 bg-brand-blue"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.a
                            key={index}
                            href={blog.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group block p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-brand-blue/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">{blog.category}</span>
                                <span className="text-xs text-gray-500">{blog.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white group-hover:text-brand-blue transition-colors mb-3">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {blog.excerpt}
                            </p>

                            <div className="flex items-center text-brand-blue text-sm font-bold">
                                READ STORY
                                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;