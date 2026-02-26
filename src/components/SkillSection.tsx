const toolkit = [
    {
        category: "Frontend Core",
        tools: [
            { name: "HTML/CSS", level: "95%", desc: "Semantic structure and modern layouts." },
            { name: "JavaScript", level: "85%", desc: "Core logic and ES6+ features." },
            { name: "React", level: "80%", desc: "Modern UI library for state-driven apps." },
            { name: "TypeScript", level: "80%", desc: "Type-safe JavaScript for robust scaling." },
        ]
    },
    {
        category: "Styling & Design",
        tools: [
            { name: "Tailwind CSS", level: "90%", desc: "Utility-first CSS for rapid, bespoke UI." },
            { name: "Bootstrap", level: "90%", desc: "Component-based responsive frameworks." },
            { name: "Figma", level: "75%", desc: "UI/UX prototyping and design systems." },
            {name: "Canva", level: "90%", desc: "Rapid visual prototyping and high-impact digital asset creation."}
        ]
    },
    {
        category: "Backend & Database",
        tools: [
            { name: "Laravel", level: "50%", desc: "Elegant PHP framework for web artisans." },
            { name: "PHP", level: "50%", desc: "Server-side scripting and API logic." },
            { name: "MySQL", level: "50%", desc: "Relational database management and SQL." }
        ]
    },
    {
        category: "DevOps & Version Control",
        tools: [
            { name: "Git", level: "70%", desc: "Distributed version control system." },
            { name: "GitHub", level: "70%", desc: "Collaborative workflow and CI/CD." }
        ]
    }
];

export default function SkillSection() {
    return (
        <section id="toolkit" className="py-24 bg-slate-900 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-[1px] w-12 bg-brand-blue"></span>
                        <span className="text-brand-blue font-mono text-xs tracking-[0.5em] uppercase">Toolkit</span>
                        <span className="h-[1px] w-12 bg-brand-blue"></span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic">
                        The Digital <span className="text-brand-blue">Workshop.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        An integrated suite of technologies I use to constanly <span className="text-white italic">Learn & Explore</span> to create digital solutions.
                    </p>
                </div>

                {/* Categorized Grid */}
                <div className="space-y-16">
                    {toolkit.map((group, groupIdx) => (
                        <div key={groupIdx}>
                            <h3 className="text-brand-blue font-mono text-sm mb-8 tracking-widest uppercase flex items-center gap-4">
                                <span className="opacity-50">0{groupIdx + 1}</span> {group.category}
                                <span className="h-[1px] flex-1 bg-slate-800"></span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {group.tools.map((tool, index) => (
                                    <div key={index} className="group relative bg-slate-800/30 p-6 rounded-xl border border-white/5 hover:border-brand-blue/40 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-white font-bold text-lg">{tool.name}</h4>
                                            <span className="text-brand-blue font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                                {tool.level}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                                            {tool.desc}
                                        </p>
                                        {/* Minimal Progress Bar */}
                                        <div className="h-[1px] w-full bg-slate-800 relative overflow-hidden">
                                            <div
                                                className="absolute h-full bg-brand-blue shadow-[0_0_8px_#27F5EB] transition-all duration-1000 ease-out"
                                                style={{ width: tool.level }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
