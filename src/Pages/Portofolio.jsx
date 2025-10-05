import { useEffect, useState, useCallback } from "react";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes, Trophy } from "lucide-react";

// Separate ShowMore/ShowLess button component
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
          ${
            isShowingMore
              ? "group-hover:-translate-y-0.5"
              : "group-hover:translate-y-0.5"
          }
        `}
      >
        <polyline
          points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
        ></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "typescript.png", language: "TypeScript" },
  { icon: "Python.png", language: "Python" },
  { icon: "C++.png", language: "C++" },
  { icon: "FastAPI.png", language: "FastAPI" },

  { icon: "mongodb.png", language: "MongoDB" },
  { icon: "sqlite3.jpeg", language: "SQLite" },
  { icon: "mysql.webp", language: "MySQL" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "expresssjs.png", language: "ExpressJs" },

  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "Shadcn.png", language: "Shadcn UI" },
  // { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      // const projectCollection = collection(db, "projects");
      // const certificateCollection = collection(db, "certificates");

      // const [projectSnapshot, certificateSnapshot] = await Promise.all([
      //   getDocs(projectCollection),
      //   getDocs(certificateCollection),
      // ]);

      // const projectData = projectSnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      //   TechStack: doc.data().TechStack || [],
      // }));

      // const certificateData = certificateSnapshot.docs.map((doc) => doc.data());

      const projectData = [
        {
          id: "StrataDB",
          Img: "/stratadb.png",
          Link: "https://github.com/YASWANTH104/StrataDB",
          Github: "https://github.com/YASWANTH104/StrataDB",
          Description:
            "StrataDB is a high-performance, file-based key-value datastore engine built in Python, designed with database internals like LSM Trees, SSTables, Bloom Filters, and Write-Ahead Logs. It efficiently manages data persistence and provides fast CRUD operations with strong fault tolerance and recovery capabilities.",
          Features: [
            "Developed a lightweight key-value datastore supporting efficient CRUD operations using Python.",
            "Implemented LSM Trees, SSTables, and Bloom Filters for optimized writes and rapid data lookups.",
            "Integrated Write-Ahead Logging (WAL) for crash recovery and data durability under high-throughput conditions.",
            "Designed MemTable flushing and SSTable compaction mechanisms for maintaining storage efficiency and consistency.",
            "Benchmarked over 20K+ insertions achieving millisecond-level write latency, outperforming SQLite in write performance.",
            "Modular architecture enabling extensibility for advanced indexing, caching, and replication mechanisms.",
          ],

          Title: "StrataDB",
          TechStack: [
            "Python",
            "LSM Tree",
            "SSTable",
            "Bloom Filters",
            "Write-Ahead Log (WAL)",
            "Data Structures",
            "File I/O",
          ],
        },
        {
          id: "Yash AI-Career Coach",
          Img: "/carrerCoach.png",
          Link: "https://virtualassistant-4h9u.onrender.com/",
          Github: "https://github.com/YASWANTH104/Yash-AI",
          Description:
            "Sens-AI is a full-stack AI-powered career coaching platform built with Next.js, Prisma, Neon DB, Tailwind CSS, and Clerk authentication. It helps users explore industry insights, track career growth, and get AI-generated recommendations using Google Gemini API. The app integrates Inngest for background job handling and provides a modern, responsive UI designed with Shadcn UI components.",
          Features: [
            "Users can sign up, sign in, and complete onboarding securely through Clerk, with role-based access to features.",
            "Provides personalized career recommendations and industry-specific insights using Gemini AI integration.",
            "Stores and manages user profiles, AI insights, and industry data efficiently using Neon (PostgreSQL) and Prisma ORM.",
            "Automates background tasks and scheduled updates with Inngest, ensuring real-time and scalable operations",
            "Offers a clean, responsive design with Tailwind CSS and Shadcn UI components, adaptable across devices.",
            "Displays demand levels, skill gaps, and career growth trends in an interactive, easy-to-read format.",
            "Built on Next.js with modular structure, supporting server-side rendering and API routes for high performance and maintainability.",
          ],

          Title: "Sens AI - Career Coach",
          TechStack: [
            "Next.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Neon (PostgreSQL)",
            "Prisma",
            "Clerk",
            "Gemini API",
            "Inngest",
            "JavaScript",
            "CSS",
          ],
        },
        {
          id: "Virtual Assistant",
          Img: "/Virtual Assistant.png",
          Link: "https://yash-ai-gules.vercel.app",
          Github: "https://github.com/YASWANTH104/Yash-AI",
          Description:
            "This project was designed to create a personalized JARVIS-style AI Virtual Assistant that enhances user interaction through intelligent voice communication. It allows users to customize their assistant’s name, avatar, and voice, while ensuring secure access with JWT-based authentication. By integrating Cloudinary for media uploads and leveraging Gemini AI for intelligent responses, the system provides a highly interactive and personalized experience. Deployed on a scalable MERN stack architecture, it delivers a seamless, responsive, and engaging virtual assistant for everyday use.",
          Features: [
            "Intelligent voice interaction using Web Speech API and Gemini AI for a JARVIS-style experience.",
            "Secure authentication with JWT and bcrypt to enable personalized user sessions.",
            "Full customization options for assistant’s name, avatar, and voice to enhance user engagement.",
            "Cloudinary + Multer integration for uploading and managing assistant images and branding.",
            "Responsive front end built with React and Tailwind, paired with a scalable Node.js + MongoDB backend.",
            "Seamless deployment on Render for reliable performance and accessibility across devices.",
          ],

          Title: "Virtual Assistant",
          TechStack: [
            "ReactJS",
            "Tailwind CSS",
            "Gemini AI",
            "Web Speech API",
            "CSS",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "Cloudinary",
          ],
        },
        {
          id: "NxtTrendz",
          TechStack: [
            "ReactJS",
            "MongoDB",
            "Bootstrap",
            "ExpressJS",
            "NodeJS",
            "CSS",
            "React Context API",
          ],
          Github: "https://github.com/YASWANTH104/NXT_TRENDZ",
          Description:
            "NXT_TRENDZ is a React-based e-commerce web application that simulates a real-world online shopping experience, focusing on interactive cart functionality. Users can browse products, add items to their cart, adjust quantities, remove products, and view a dynamic cart summary, all with real-time updates. The app integrates user authentication to provide a personalized and secure shopping experience, maintains cart state across sessions, and offers a responsive design for seamless use on desktops, tablets, and mobile devices. This project highlights practical React concepts, including state management, component-based architecture, and user interaction, making it an ideal implementation for learning and demonstrating e-commerce functionalities.",
          Title: "NxtTrendz",
          Link: "https://gyaswanthsai.ccbp.tech",
          Features: [
            "Users can add products to their cart, adjust quantities, and remove items. The cart updates in real-time, reflecting changes in both item counts and total price.",
            "Only authenticated users can interact with cart functionalities, ensuring a secure and personalized shopping experience.",
            "The interface adapts to different screen sizes, making it usable on desktops, tablets, and mobile devices.",
            "Cart state is preserved during the session, preventing loss of selected items when navigating between pages.",
            "The app provides visual cues and messages for actions such as adding/removing items, emptying the cart, or updating quantities.",
          ],
          Img: "/nxttrendz.png",
        },
        {
          id: "NxtWatch",
          Link: "https://nxtwatchyaswanth.netlify.app/",
          Features: [
            "Users can log in using credentials; upon successful login, a JWT token is stored in cookies for session management.",
            "Unauthenticated users are redirected to the login page when attempting to access protected routes like Home, Trending, Gaming, Saved Videos, or Video Details.",
            "Upon accessing Home or Trending routes, an HTTP GET request is made to fetch video data, displaying a loader during the fetch process.",
            "A sidebar is present in each section, facilitating navigation between routes.",
            "If an HTTP GET request fails, a Failure view is displayed with a Retry button to attempt the request again.",
            "Users can switch between dark and light themes for the interface",
          ],
          Title: "NxtWatch",
          TechStack: [
            "ReactJS",
            "Botstrap",
            "CSS",
            "Stlyed Components",
            "JWT",
            "Node.js",
            "Express.js",
            "MongoDb",
          ],
          Img: "/nxtwatch.png",
          Description:
            "Nxtwatch is a React JS-based YouTube clone that allows users to browse, search, and watch videos in a responsive and user-friendly interface. It features JWT-based authentication, protected routes, dynamic video fetching, and dark/light theme toggle. The app also includes a responsive sidebar for easy navigation and error handling with retry for network failures.",
          Github: "https://github.com/YASWANTH104/Nxtwatch",
        },
        {
          id: "Jobby App",
          Link: "https://jobby-application-alpha.vercel.app/login",
          Features: [
            "Users must log in (username & password), and a JWT is issued and stored (e.g. in local storage) to access protected areas.",
            "Certain pages (Home, Jobs list, Job details) are inaccessible unless authenticated; non-authenticated users are redirected to Login.",
            "Users can search jobs by title and apply filters like salary range and employment type (via query parameters) to narrow down results.",
            "Smooth navigation between different screens/pages: Login, Home, Jobs listing, and Job details.",
            "Each job has a detailed view (job item details) that shows more information when clicked.",
            "Optimized UI for desktop and mobile, ensuring accessibility across devices.",
          ],
          Title: "Jobby App",
          TechStack: [
            "ReactJS",
            "Botstrap",
            "CSS",
            "Stlyed Components",
            "JWT",
            "Node.js",
            "Express.js",
            "MongoDb",
          ],
          Img: "/jobby.png",
          Description:
            "Jobby App is a React-based job portal that enables users to securely log in, explore job listings, filter opportunities, and view detailed job descriptions with a smooth, responsive UI.",
          Github: "https://github.com/YASWANTH104/Jobby-Application",
        },
        {
          id: "Emoji Game",
          TechStack: ["React Js", "Bootstrap", "HTML", "CSS"],
          Title: "Emoji Game",
          Description:
            "The Emoji Game is a web-based application designed to enhance your memory and recognition skills through interactive emoji-based challenges. Players are presented with various emoji sequences and must identify the corresponding words or phrases. This game offers a fun and engaging way to test and improve your emoji interpretation abilities.",
          Features: [
            "Engage with a series of emoji sequences that represent common phrases or words.",
            "Optimized for both desktop and mobile devices, ensuring a seamless experience across platforms.",
            "Clean and intuitive layout that makes navigation and gameplay straightforward.",
            "Immediate responses to user inputs, providing a dynamic and engaging experience.",
            "Includes design files tailored for different screen sizes, enhancing the visual appeal and usability of the game.",
          ],
          Github: "https://github.com/YASWANTH104/Emoji-Game",
          Link: "https://yaswanth104.ccbp.tech",
          Img: "/EmojiGame.png",
        },
      ];
      const certificateData = [
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757247411/Screenshot_2025-09-07_at_5.43.39_PM_yfr2rz.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239579/Screenshot_2025-09-06_at_5.37.02_PM_jcf042.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239580/Screenshot_2025-09-06_at_5.35.25_PM_sosfpi.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239579/Screenshot_2025-09-06_at_5.31.16_PM_vv7cm3.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239582/Screenshot_2025-09-06_at_5.46.47_PM_boeedg.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239579/Screenshot_2025-09-06_at_5.33.06_PM_wtedy6.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239584/Screenshot_2025-09-06_at_5.36.08_PM_kjkh3j.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239583/Screenshot_2025-09-06_at_5.54.34_PM_lrxwhd.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239580/Screenshot_2025-09-06_at_5.32.01_PM_jqnk7n.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757239580/Screenshot_2025-09-06_at_5.38.00_PM_hof0e7.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757247411/Screenshot_2025-09-07_at_5.42.59_PM_liiojj.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757247409/Screenshot_2025-09-07_at_5.40.05_PM_rokai8.png",
        },
        {
          Img: "https://res.cloudinary.com/dpxtbouej/image/upload/v1757247409/Screenshot_2025-09-07_at_5.39.27_PM_trxjlq.png",
        },
      ];

      setProjects(projectData);
      setCertificates(certificateData);

      // Store in localStorage
      localStorage.setItem("projects", JSON.stringify(projectData));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else if (type === "certificates") {
      setShowAllCertificates((prev) => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, initialItems);

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* Header section - unchanged */}
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={
                <Code className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Award className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <Boxes className="mb-2 w-5 h-5 transition-all duration-300" />
              }
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("projects")}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore("certificates")}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={
                      index % 3 === 0
                        ? "fade-up-right"
                        : index % 3 === 1
                        ? "fade-up"
                        : "fade-up-left"
                    }
                    data-aos-duration={
                      index % 3 === 0
                        ? "1000"
                        : index % 3 === 1
                        ? "1200"
                        : "1000"
                    }
                  >
                    <TechStackIcon
                      TechStackIcon={stack.icon}
                      Language={stack.language}
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
