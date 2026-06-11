import { useState, useEffect } from "react";
import { Calendar, Clock, X, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export const experienceData = [
  {
    id: 3,
    company: "Nablon AI",
    role: "AI Developer",
    startDate: new Date(2026, 3, 1),
    endDate: null,
    type: "Full-time",
    description:
      "Building production-grade agentic AI solutions for Fortune 500 clients across CPG, Banking, MedTech, and Industrial sectors.",
    responsibilities: [
      "Designing and developing intelligent agentic AI systems for enterprise clients",
      "Building AI pipelines and integrations for real-world business workflows",
      "Collaborating with senior engineers on AI product architecture and delivery",
      "Contributing to internal tools and frameworks for agentic AI development",
    ],
    techStack: ["Python", "React", "FastAPI", "LangChain", "OpenAI API"],
    color: "from-[#06b6d4] to-[#6366f1]",
    bgColor: "from-[#06b6d4]/10 to-[#6366f1]/10",
    initial: "N",
  },
  {
    id: 2,
    company: "CodeTantra",
    role: "Software Developer",
    startDate: new Date(2025, 11, 1),
    endDate: new Date(2026, 3, 30),
    type: "Full-time",
    description:
      "Contributed to the development of educational technology platforms, building features that enhance the learning experience for students.",
    responsibilities: [
      "Developed and maintained features for the learning management system",
      "Built RESTful APIs for educational content delivery and user management",
      "Implemented interactive coding assessment modules",
      "Collaborated with cross-functional teams to deliver product features",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    color: "from-[#a855f7] to-[#ec4899]",
    bgColor: "from-[#a855f7]/10 to-[#ec4899]/10",
    initial: "C",
  },
  {
    id: 1,
    company: "Sabeena Digital Media Services",
    role: "Web Developer",
    startDate: new Date(2025, 6, 1),
    endDate: new Date(2025, 10, 30),
    type: "Full-time",
    description:
      "Developed and maintained web applications for digital media services, contributing to UI/UX improvements and performance optimization.",
    responsibilities: [
      "Built responsive web interfaces using React and modern CSS frameworks",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized web application performance and loading times",
      "Maintained and upgraded existing features based on client feedback",
    ],
    techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    color: "from-[#6366f1] to-[#a855f7]",
    bgColor: "from-[#6366f1]/10 to-[#a855f7]/10",
    initial: "S",
  },
];

function computeDuration(startDate, endDate) {
  const end = endDate || new Date();
  const diffMs = end - startDate;
  const diffMonths = Math.round(diffMs / (1000 * 60 * 60 * 24 * 30.44));
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  if (years > 0 && months > 0)
    return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  if (years > 0) return `${years} year${years > 1 ? "s" : ""}`;
  return `${months} month${months !== 1 ? "s" : ""}`;
}

function formatDateRange(startDate, endDate) {
  const opts = { month: "short", year: "numeric" };
  const start = startDate.toLocaleDateString("en-US", opts);
  const end = endDate ? endDate.toLocaleDateString("en-US", opts) : "Present";
  return `${start} – ${end}`;
}

const ExperienceModal = ({ exp, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0d0d2b] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color} rounded-t-2xl`} />

        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0`}
            >
              {exp.initial}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-purple-300 font-medium">{exp.role}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDateRange(exp.startDate, exp.endDate)}
                </span>
                <span
                  className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${exp.color} text-white`}
                >
                  <Clock className="w-3 h-3" />
                  {computeDuration(exp.startDate, exp.endDate)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-5 leading-relaxed">{exp.description}</p>

          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-purple-400" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function getTotalExperience() {
  const start = new Date(Math.min(...experienceData.map((e) => e.startDate.getTime())));
  const now = new Date();
  const totalMonths = Math.max(0, Math.round((now - start) / (1000 * 60 * 60 * 24 * 30.44)));
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years > 0 && months > 0)
    return `${years} year${years > 1 ? "s" : ""} ${months} month${months > 1 ? "s" : ""}`;
  if (years > 0) return `${years} year${years > 1 ? "s" : ""}`;
  return `${months} month${months !== 1 ? "s" : ""}`;
}

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [totalExp, setTotalExp] = useState(getTotalExperience);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
    // recompute every hour so the value stays live on long sessions
    const timer = setInterval(() => setTotalExp(getTotalExperience()), 60 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="Experience" className="py-16 md:py-20 px-4 sm:px-6 lg:px-[8%]">
      <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Work Experience
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
          My professional journey and the teams I've been part of
        </p>
        <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
          <Clock className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-purple-300 font-semibold">{totalExp}</span>
          <span className="text-gray-400">of professional experience</span>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-[#ec4899] opacity-30 md:-translate-x-px" />

        {experienceData.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={exp.id}
              data-aos={isLeft ? "fade-right" : "fade-left"}
              data-aos-duration="800"
              className={`relative flex mb-10 md:mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] md:-translate-x-1/2 mt-6 z-10 ring-4 ring-[#030014] flex-shrink-0" />

              {/* Card — offset from the line */}
              <div
                className={`ml-14 md:ml-0 md:w-[46%] ${
                  isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <div
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/20"
                  onClick={() => setSelectedExp(exp)}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md`}
                      >
                        {exp.initial}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold text-base leading-tight truncate">
                          {exp.company}
                        </h3>
                        <p className="text-purple-300 text-sm">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white shadow-sm`}
                      >
                        <Clock className="w-3 h-3" />
                        {computeDuration(exp.startDate, exp.endDate)}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{exp.description}</p>

                    <span className="text-xs text-purple-400 group-hover:text-purple-300 font-medium flex items-center gap-1 transition-colors">
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedExp && (
        <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
    </section>
  );
};

export default Experience;
