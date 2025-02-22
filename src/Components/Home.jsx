import React, { useState } from 'react';
import { Link } from "react-scroll";
import { Briefcase, GraduationCap, ChevronUp, Menu, X, Code, ExternalLink, Mail, Phone, Linkedin, Globe, Github } from 'lucide-react';
import resume from "../Assets/resume.pdf";
import Profile_Image from "../Assets/profile_photo.jpg";
import Profile1 from "../Assets/Profile1.jpg";
import cp from "../Assets/C_programing.jpg";
import algebra from "../Assets/college_algebra_with_python.JPG";
import analysis from "../Assets/Data_analysis_with_python.JPG";
import science from "../Assets/Data_Science_for_engineers.JPG";
import energy from "../Assets/energy_litrature.JPG";
import front from "../Assets/Front_end_libraries.JPG";
import jsdsa from "../Assets/JS_DSA.JPG";
import machine from "../Assets/Machine_learning_with_python.JPG";
import math from "../Assets/math_for_programmer_scalar.JPG";
import nodejs from "../Assets/nodejs_certification.JPG";
import datascience from "../Assets/python_for_datascience.JPG";
import pythonpro from "../Assets/python_programing.JPG";
import responsive from "../Assets/Responsive_web_design.JPG";
import scientific from "../Assets/Scientific_Computing_with_python.JPG";
import topological from "../Assets/Topoloogical_data_analysis.JPG";

const TimelineElement = ({ date, title, subtitle, children, icon: Icon }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-0 w-px h-full bg-sky-200 group-last:hidden"></div>
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-sky-500 text-white flex items-center justify-center">
      <Icon size={12} />
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
      <div className="text-sm text-sky-600 mb-2">{date}</div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="text-gray-600 mb-4">{subtitle}</div>
      {children}
    </div>
  </div>
);

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const workExperience = [
    {
      company: "Mediliez Innovations Pvt Limited",
      position: "Data Engineer",
      date: "2023 - Present",
      description: [
       
      ]
    },
    {
      company: "Santrotech Software Technologies",
      position: "Data Engineer",
      date: "2021 - 2023",
      description: [
        
      ]
      // description: [
      //   "Developed full-stack web applications",
      //   "Implemented Django-based solutions",
      //   "Managed client relationships and project delivery"
      // ]
    }
  ];

  const education = [
    {
      institution: "Visvesvaraya Technological University",
      degree: "Bachelor of Engineering",
      field: "Information Science and Engineering",
      date: "2017-2021"
    },
    {
      institution: "Department of Pre-university Education",
      degree: "Pre-University Course",
      field: "Physics, Chemistry, Mathematics, Biology",
      date: "2015-2017"
    },
    {
      institution: "Swamy Vivekananda Institute of Computer Science",
      degree: "Diploma in Computer Application",
      field: "Computer Software and Media Application",
      date: "2015-2016"
    }
  ];

// Previous components remain the same (TimelineElement)
const TimelineElement = ({ date, title, subtitle, children, icon: Icon }) => (
  <div className="relative pl-8 pb-8 group">
    <div className="absolute left-0 top-0 w-px h-full bg-sky-200 group-last:hidden"></div>
    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-sky-500 text-white flex items-center justify-center">
      <Icon size={12} />
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
      <div className="text-sm text-sky-600 mb-2">{date}</div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <div className="text-gray-600 mb-4">{subtitle}</div>
      {children}
    </div>
  </div>
);

// ProjectCard Component
const ProjectCard = ({ title, description, technologies, liveLink, githubLink }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      {liveLink && (
        <a href={liveLink} className="flex items-center text-sky-600 hover:text-sky-800">
          <Globe size={16} className="mr-1" /> Live Demo
        </a>
      )}
      {githubLink && (
        <a href={githubLink} className="flex items-center text-gray-600 hover:text-gray-800">
          <Github size={16} className="mr-1" /> Code
        </a>
      )}
    </div>
  </div>
);

// CertificateCard Component
const CertificateCard = ({ title, imageUrl, link }) => (
  <div className="border-2 border-gray-200 rounded-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
    <a href={link} className="block">
      <div className="aspect-video bg-gray-100 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all flex items-center justify-center">
          <ExternalLink className="text-transparent hover:text-white" size={24} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-700 truncate">{title}</h3>
      </div>
    </a>
  </div>
);



  // Previous data remains the same (workExperience, education)
  // ... (keep existing workExperience and education arrays)

  const projects = [
    {
      title: "Data Lake Automation with AWS Glue for Sales Optimization",
      description: "Developed an automated data lake solution on AWS using Python and services like S3, Glue, and Redshift. Enabled seamless data ingestion, processing, and querying. The pipeline ingests data from various data sources, performs transformations, and loads the processed data into the Redshift data warehouse for analysis.",
      technologies: ["AWS S3", "AWS Glue", "Redshift", "Python"],
      liveLink: "https://demo-datalake.example.com",
      githubLink: "https://github.com/yourusername/data-lake-automation"
    },
    {
      title: "Customer Transaction Data Pipeline",
      description: "Built a data pipeline to process customer transaction data from various sources. The pipeline ingests data from AWS S3, transforms it using PySpark, and stores the processed data in an AWS RDS (MySQL) database. The data is then used to generate insights and reports for business analysis.",
      technologies: ["AWS S3", "PySpark", "AWS RDS (MySQL)", "ETL"],
      liveLink: "https://demo-transaction-pipeline.example.com",
      githubLink: "https://github.com/yourusername/customer-transaction-pipeline"
    }
  ];

  const certificates = [
    {
      title: "C Programming",
      imageUrl: cp, // C Programming Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "College Algebra with Python",
      imageUrl: algebra, // College Algebra Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Node.js Certification",
      imageUrl: nodejs, // Node.js Certification
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Mathematics for Programmers",
      imageUrl: math, // Math for Programmers Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Machine Learning with Python",
      imageUrl: machine, // Machine Learning Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "JavaScript Data Structures & Algorithms",
      imageUrl: jsdsa, // JavaScript DSA Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Front End Libraries",
      imageUrl: front, // Frontend Libraries Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Energy Literature Survey",
      imageUrl: energy, // Energy Literature Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Data Science for Engineers",
      imageUrl: datascience, // Data Science for Engineers Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Python Programming",
      imageUrl: pythonpro, // Python Programming Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Responsive Web Design",
      imageUrl: responsive, // Responsive Web Design Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Scientific Computing with Python",
      imageUrl: scientific, // Scientific Computing Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Topological Data Analysis",
      imageUrl: topological, // Topological Data Analysis Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    },
    {
      title: "Data Analysis with Python",
      imageUrl: analysis, // Data Analysis Certificate
      link: "https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view",
    }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <span className="flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <span className="font-bold text-2xl">
            <span className="text-sky-900">S</span>anthosh Bharadwaj H A
          </span>
        </span>

        <div className="hidden md:flex space-x-8">
          {["About", "Experience", "Education", "Contact"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={item === "About" ? 0 : -80}// Adjust offset for proper positioning
              className="cursor-pointer font-medium hover:text-sky-600 transition-colors text-gray-600"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['About', 'Experience', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsNavOpen(false);
                }}
                className="text-xl font-medium hover:text-sky-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold space-y-2">
              <span className="block">Hi,</span>
              <span className="block">I'm <span className="text-red-600">Santhosh</span></span>
              <span className="block">Data Engineer/ SWE</span>
            </h1>
            <p className="text-xl text-gray-600">
            Data Engineer / Big Data / PySpark / ETL / SQL / Cloud (AWS & Azure) / Kafka / Airflow / Data Lakes / Django / FastAPI / Flask
          </p>

            <div className="flex space-x-4">
              <button className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors">
                View Projects
              </button>
              <button> 
              <a 
              href={resume} 
              download="resume.pdf"
              className="border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-lg hover:bg-sky-50 transition-colors"
            >
              Download CV
            </a>
            </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={Profile_Image}
              alt="Profile"
              className="rounded-full w-80 h-80 mx-auto shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 px-6 bg-white" id="experience">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <TimelineElement
                key={index}
                date={work.date}
                title={work.company}
                subtitle={work.position}
                icon={Briefcase}
              >
                <ul className="space-y-2">
                  {work.description.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Code size={16} className="text-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TimelineElement>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6 bg-gray-50" id="education">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <TimelineElement
                key={index}
                date={edu.date}
                title={edu.institution}
                subtitle={edu.degree}
                icon={GraduationCap}
              >
                <p className="text-gray-600">{edu.field}</p>
              </TimelineElement>
            ))}
          </div>
        </div>
      </section>
       {/* Projects Section */}
       <section className="py-16 px-6 bg-gray-50 flex flex-col items-center" id="projects">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
        </section>

      {/* Certificates Section */}
      <section className="py-16 px-6 bg-white" id="certificates">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="space-y-4">
            <a href="mailto:santhoshbharadwajha@gmail.com" 
               className="flex items-center justify-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors">
              <Mail size={20} />
              <span>santhoshbharadwaj2498@gmail.com</span>
            </a>
            <a href="tel:+919449695806" 
               className="flex items-center justify-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors">
              <Phone size={20} />
              <span>+91-8970210996</span>
            </a>
            <a href="https://www.linkedin.com/in/santhoshbharadwaj-h-a-2b009615b/" 
               className="flex items-center justify-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition-colors"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default Home;
// import React from 'react';
// import { useState } from "react";
// import Profile1 from "../Assets/Profile1.jpg";
// import cp from "../Assets/C_programing.jpg";
// import algebra from "../Assets/college_algebra_with_python.JPG";
// import analysis from "../Assets/Data_analysis_with_python.JPG";
// import science from "../Assets/Data_Science_for_engineers.JPG";
// import energy from "../Assets/energy_litrature.JPG";
// import front from "../Assets/Front_end_libraries.JPG";
// import jsdsa from "../Assets/JS_DSA.JPG";
// import machine from "../Assets/Machine_learning_with_python.JPG";
// import math from "../Assets/math_for_programmer_scalar.JPG";
// import nodejs from "../Assets/nodejs_certification.JPG";
// import datascience from "../Assets/python_for_datascience.JPG";
// import pythonpro from "../Assets/python_programing.JPG";
// import responsive from "../Assets/Responsive_web_design.JPG";
// import scientific from "../Assets/Scientific_Computing_with_python.JPG";
// import topological from "../Assets/Topoloogical_data_analysis.JPG";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { FaUserGraduate } from "react-icons/fa6";

// export default function Home() {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//     return (
//       <div >
// <div className="flex items-center justify-between border-b border-gray-400 py-8 ml-4 mr-4">
// <span class="relative inline-flex h-5">
//   <span class="animate-ping absolute inline-flex h-full w-5/6 rounded-full bg-sky-400 opacity-75"></span>
//   <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
//   <span class=" font-bold text-2xl" id="top"><span class="text-sky-900">S</span>anthosh Bharadwaj H A</span>
// </span> 

//       <a href="/">
        
//       </a>
//       <nav>
//         <section className="MOBILE-MENU flex lg:hidden">
//           <div
//             className="HAMBURGER-ICON space-y-2"
//             onClick={() => setIsNavOpen((prev) => !prev)}
//           >
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600 font-bold">About</span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600">Portfolio</span>
//             <span className="block h-0.5 w-8 animate-pulse bg-gray-600">Contactus</span>
//           </div>

//           <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
//             <div
//               className="absolute top-0 right-0 px-8 py-8"
//               onClick={() => setIsNavOpen(false)}
//             >
//               <svg
//                 className="h-8 w-8 text-gray-600"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </div>
//             <ul className="flex flex-col items-center justify-between">
//               <li className="border-b border-gray-400 my-8 uppercase font-bold">
//                 <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">About</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase font-bold">
//                 <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">Portfolio</a>
//               </li>
//               <li className="border-b border-gray-400 my-8 uppercase font-bold">
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </section>

//         <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-bold">
//           <li>
//             <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">About</a>
//           </li>
//           <li>
//             <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">Portfolio</a>
//           </li>
//           <li>
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <style>{`
//       .hideMenuNav {
//         display: none;
//       }
//       .showMenuNav {
//         display: block;
//         position: absolute;
//         // width: 100%;
//         height: 100vh;
//         top: 0;
//         left: 0;
//         background: white;
//         z-index: 10;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-evenly;
//         align-items: center;
//       }
//     `}</style>
//     </div>
//     <div className='flex justify-center py-7 px-10 mt-20'>
//                 <div className='gap-2 ml-14'>
//                     <h1 className='mt-10 text-5xl font-bold'>Hi,</h1>
//                     <h1 className='mt-2 text-5xl font-bold '>I'm <span class="text-red-600">Santhosh</span></h1>
//                     <h1 className='mt-2 text-5xl font-bold'>Software developer</h1>
//                     <h2 className='mt-8 text-2xl mr-40 font-semibold'>Full Stack Developer / MERN Stack / DevOps / Django </h2>
//                 </div>
//                 <img src={Profile1} alt="Profile_Image" class="rounded-full h-80 w-80"/>
//             </div>

//             <div id="education" class="mt-80">
//               <h2 class="font-bold text-3xl mb-4 ml-8">Education</h2>
//             <style>{`
//             .vertical-timeline::before {
//                         background: red; /* Change this to the desired red color */
//                       }

//                       /* Or, if using a class to style the timeline */
//                       .custom-timeline::before {
//                         background: red; /* Change this to the desired red color */
//                       `}
//                     </style>
//             <VerticalTimeline>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2017-2021"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<FaUserGraduate />}
//   >
//     <h3 className="vertical-timeline-element-title">Visvesvaraya Technological University</h3>
//     <h4 className="vertical-timeline-element-subtitle">Bachelore pf Engineering</h4>
//     <p>
//       BE, Information Science and Engineering
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2015-2017"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaUserGraduate />}
//   >
//     <h3 className="vertical-timeline-element-title">Department of Pre-university Education</h3>
//     <h4 className="vertical-timeline-element-subtitle">Pre-University Course</h4>
//     <p>
//       Physics, Chemistry, Mathematics, Biology
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2015-2016"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaUserGraduate />}
//   >
//     <h3 className="vertical-timeline-element-title">Swamy Vivekananda Institute of Computer Science </h3>
//     <h4 className="vertical-timeline-element-subtitle">Diploma in Computer Application</h4>
//     <p>
//       Computer Software and Media Application
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2015"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<FaUserGraduate />}
//   >
//     <h3 className="vertical-timeline-element-title">Karnataka School Examination and Assessment Board</h3>
//     <p>
//     Metric Education
//     </p>
//   </VerticalTimelineElement>
// </VerticalTimeline>
// </div>
// <div id="certification">
//   <h1 class="font-bold text-3xl mb-4 ml-8 mt-20">Certification</h1>
//   <lable class="font-bold ml-8">Click on the Image to view certificate</lable>
//   <section class="text-gray-700 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4 text-center">
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={cp} alt="C_programing" /></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={algebra} alt="College_algebra_free_code_camp" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={nodejs} alt="nodejs_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={math} alt="math_for_programmer_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={machine} alt="machine_lerning_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={jsdsa} alt="JavaScript_data_structure and algorithum_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={front} alt="frontend_libraries_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={energy} alt="energy_litrature_survey_certificate" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={datascience} alt="datascience for the engineers" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={pythonpro} alt="python for beginers" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={responsive} alt="responsive web design" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={scientific} alt="scientific programing in the python" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={topological} alt="topological data analysis" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={analysis} alt="data analysis in python" class="w-80 h-36"/></a>
//         </div>
//       </div>
//       <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
//         <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
//         <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
//         <img src={science} alt="topological data analysis" class="w-80 h-36"/></a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// </div>
// <section class="contact-us" id="contact">
//   <h2>Contact Us</h2>
//   <p>We'd love to hear from you!</p>
//   <ul class="contact-info">
//     <li>
//       <a href="mailto:youremail@example.com" class="contact-link">Email: santhoshbharadwajha@gmail.com</a>
//     </li>
//     <li>
//       <a href="tel:+919449695806" class="contact-link">Phone: +91-9449695806</a>
//     </li>
//     <li>
//       <a href="https://www.linkedin.com/in/santhoshbharadwaj-h-a-2b009615b/" class="contact-link">LinkedIn: Santhoshbharadwaj H A</a>
//     </li>
//   </ul>
//   <button class="top-0 -translate-x-1/2 bg-blue-500 text-white font-bold py-2 px-4 ml-24 rounded-md focus:outline-none">
// <a href='#top'>
//   Go to Top
//   </a>
// </button>
// </section>

// <style>{`
//   .contact-us {
//     background-color: #f0f0f0;
//     border-radius: 10px;
//     padding: 2rem;
//     margin: 2rem auto;
//     text-align: center; /* Center text for better appearance */
//   }

//   .contact-us h2 {
//     margin: 0 0 1rem 0; /* Adjust top margin for heading */
//     font-size: 1.5rem;
//     font-weight: bold;
//   }

//   .contact-us p {
//     margin-bottom: 1rem;
//     color: #666; /* Subdued color for intro text */
//   }

//   .contact-info {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//   }

//   .contact-link {
//     display: block;
//     padding: 1rem;
//     font-size: 1rem;
//     color: #333; /* Darker color for links */
//     text-decoration: none; /* Remove underline */
//     transition: all 0.2s ease-in-out;
//   }

//   .contact-link:hover {
//     background-color: #e0e0e0; /* Subtle hover effect */
//   }
//   `}</style>

// </div>


  
      
//     );
//   }
  
