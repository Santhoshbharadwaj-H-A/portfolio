import React from 'react';
import { useState } from "react";
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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate } from "react-icons/fa6";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

    return (
      <div >
<div className="flex items-center justify-between border-b border-gray-400 py-8 ml-4 mr-4">
<span class="relative inline-flex h-5">
  <span class="animate-ping absolute inline-flex h-full w-5/6 rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
  <span class=" font-bold text-2xl" id="top"><span class="text-sky-900">S</span>anthosh Bharadwaj H A</span>
</span> 

      <a href="/">
        
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600 font-bold">About</span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600">Portfolio</span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600">Contactus</span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between">
              <li className="border-b border-gray-400 my-8 uppercase font-bold">
                <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase font-bold">
                <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">Portfolio</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase font-bold">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-bold">
          <li>
            <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">About</a>
          </li>
          <li>
            <a href="https://santhoshbharadwaj-h-a.github.io/portfolio/">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        // width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    <div className='flex justify-center py-7 px-10 mt-20'>
                <div className='gap-2 ml-14'>
                    <h1 className='mt-10 text-5xl font-bold'>Hi,</h1>
                    <h1 className='mt-2 text-5xl font-bold '>I'm <span class="text-red-600">Santhosh</span></h1>
                    <h1 className='mt-2 text-5xl font-bold'>Software developer</h1>
                    <h2 className='mt-8 text-2xl mr-40 font-semibold'>Full Stack Developer / MERN Stack / DevOps / Django </h2>
                </div>
                <img src={Profile1} alt="Profile_Image" class="rounded-full h-80 w-80"/>
            </div>

            <div id="education" class="mt-80">
              <h2 class="font-bold text-3xl mb-4 ml-8">Education</h2>
            <style>{`
            .vertical-timeline::before {
                        background: red; /* Change this to the desired red color */
                      }

                      /* Or, if using a class to style the timeline */
                      .custom-timeline::before {
                        background: red; /* Change this to the desired red color */
                      `}
                    </style>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017-2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">Visvesvaraya Technological University</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelore pf Engineering</h4>
    <p>
      BE, Information Science and Engineering
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015-2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">Department of Pre-university Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Pre-University Course</h4>
    <p>
      Physics, Chemistry, Mathematics, Biology
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015-2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">Swamy Vivekananda Institute of Computer Science </h3>
    <h4 className="vertical-timeline-element-subtitle">Diploma in Computer Application</h4>
    <p>
      Computer Software and Media Application
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">Karnataka School Examination and Assessment Board</h3>
    <p>
    Metric Education
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
<div id="certification">
  <h1 class="font-bold text-3xl mb-4 ml-8 mt-20">Certification</h1>
  <lable class="font-bold ml-8">Click on the Image to view certificate</lable>
  <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={cp} alt="C_programing" /></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={algebra} alt="College_algebra_free_code_camp" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={nodejs} alt="nodejs_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={math} alt="math_for_programmer_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={machine} alt="machine_lerning_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={jsdsa} alt="JavaScript_data_structure and algorithum_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={front} alt="frontend_libraries_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={energy} alt="energy_litrature_survey_certificate" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={datascience} alt="datascience for the engineers" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={pythonpro} alt="python for beginers" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={responsive} alt="responsive web design" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={scientific} alt="scientific programing in the python" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={topological} alt="topological data analysis" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={analysis} alt="data analysis in python" class="w-80 h-36"/></a>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        <a href="https://drive.google.com/file/d/1SZDQ7LTjcu4tC0bsfGOYloXBrCTdaXwz/view">
        <img src={science} alt="topological data analysis" class="w-80 h-36"/></a>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
<section class="contact-us" id="contact">
  <h2>Contact Us</h2>
  <p>We'd love to hear from you!</p>
  <ul class="contact-info">
    <li>
      <a href="mailto:youremail@example.com" class="contact-link">Email: santhoshbharadwajha@gmail.com</a>
    </li>
    <li>
      <a href="tel:+919449695806" class="contact-link">Phone: +91-9449695806</a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/santhoshbharadwaj-h-a-2b009615b/" class="contact-link">LinkedIn: Santhoshbharadwaj H A</a>
    </li>
  </ul>
  <button class="top-0 -translate-x-1/2 bg-blue-500 text-white font-bold py-2 px-4 ml-24 rounded-md focus:outline-none">
<a href='#top'>
  Go to Top
  </a>
</button>
</section>

<style>{`
  .contact-us {
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem auto;
    text-align: center; /* Center text for better appearance */
  }

  .contact-us h2 {
    margin: 0 0 1rem 0; /* Adjust top margin for heading */
    font-size: 1.5rem;
    font-weight: bold;
  }

  .contact-us p {
    margin-bottom: 1rem;
    color: #666; /* Subdued color for intro text */
  }

  .contact-info {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .contact-link {
    display: block;
    padding: 1rem;
    font-size: 1rem;
    color: #333; /* Darker color for links */
    text-decoration: none; /* Remove underline */
    transition: all 0.2s ease-in-out;
  }

  .contact-link:hover {
    background-color: #e0e0e0; /* Subtle hover effect */
  }
  `}</style>

</div>


  
      
    );
  }
  
