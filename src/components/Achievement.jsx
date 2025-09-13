import { Trophy } from "lucide-react";
import  { useState } from "react";

const achievements = [
    {
        id: 1,
        icon: Trophy,
        img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757248085/Screenshot_2025-09-07_at_5.54.37_PM_xz6f01.png",
        title: "National Semi-Finalist in Flipkart GRID 7.0",
        description:
            "Reached the national semifinals in Flipkart’s engineering competition.",
        date: "March 2025",
        color: "from-[#a855f7] to-[#6366f1]",
        link: "https://www.linkedin.com/posts/shaik-mahammad-jani_hackathonwinner-cynosure-svu-activity-7312865531227725824-sMv4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADs67C8Bww3SPZQuiHuGfrL3MO3nqoQ0iZg",
    },
    {
        id: 2,
        icon: Trophy,
        img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757248086/Screenshot_2025-09-07_at_5.53.11_PM_lcxdjv.png",
        title: "Top 100 in Bi-Weekly Coding Contest",
        description:
            "Secured Rank 87 in the Bi-Weekly Contest held by NxtWave.",
        date: "Feb 2025",
        color: "from-[#6366f1] to-[#a855f7]",
        link: "https://www.linkedin.com/posts/shaik-mahammad-jani_hackathonwinner-webdevelopment-eventmanagement-activity-7304159314259173377-z7l9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADs67C8Bww3SPZQuiHuGfrL3MO3nqoQ0iZg",
    },
    // Add more achievements as needed
];

const Achievement = () => {

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;
  const [showAllAchievements, setShowAllAchievements] = useState(false);

const displayedAchievements = showAllAchievements? achievements : achievements.slice(0, initialItems);


    return (<div className="w-full py-10 md:py-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                className="text-3xl md:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <span
                    style={{
                        color: "#6366f1",
                        backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Achievements
                </span>
            </h2>
 <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                              {displayedAchievements.map((ach, index) => (
                   <div
                    key={ach.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                    className="relative p-4"
                  >
                        <div
                            className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${ach.color} -z-10 rounded-2xl`}
                        />
                        <div className="flex items-center gap-4 mb-2">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                                <ach.icon className="w-7 h-7 text-[#a855f7]" />
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {ach.title}
                                </h3>
                                <span className="text-xs text-gray-400">
                                    {ach.date}
                                </span>
                            </div>
                        </div>
						<img
                            src={ach.img}
                            alt={ach.title}
                            className="w-full h-44 sm:h-48 md:h-52 lg:h-44 object-cover rounded-xl mb-2 border border-white/10"
                            loading="lazy"
                        />
                        <p className="text-gray-300 flex-1">{ach.description}</p>
                        <a
                            href={ach.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-block text-sm font-semibold text-[#a855f7] hover:text-[#6366f1] transition-colors underline"
                        >
                            View Details &rarr;
                        </a>
                    </div>
                ))}
              </div>
            </div>
        </div>
         {
                achievements.length > initialItems && (
                                  <div className="mx-auto mt-6 w-full flex justify-center">
                <ToggleButton
                  onClick={() => setShowAllAchievements(prev=>(!prev))}
                  isShowingMore={showAllAchievements}
                />
              </div>
                )
              }
    </div>)
};

export default Achievement;