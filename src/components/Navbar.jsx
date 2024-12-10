import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import profilePhoto from '/ProfilePhoto.jpg';
import BlissBakerss from '/Projects/BLISSBAKERSS.png';
import Mancot from '/Projects/MANCOT.png';
import Image from '/8771935.jpg';
import Image1 from '/Image1.jpg';
import Cards from './Cards';
import css from '/919826.png';
import Reacti from '/React-icon.svg.png';
import html from '/HTML5_logo_and_wordmark.svg.png';
import js from '/jslogo.png';
import tl from '/png-transparent-tailwind-css-hd-logo.png';
import python from '/Python-logo-notext.svg.png';
import django from '/download.png';
import node from '/node.png';
import express from '/express.png';
import mongo from '/mongo.png';

const navbar = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="Navbar">
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center bg-custom-purple h-[10%]">
          <div className="pl-8 md:pl-36 text-white text-uppercase no-underline font-oswald">
            Sahil Chhabra
          </div>
          <div className="flex justify-end w-full md:w-[65%] mr-4 md:mr-0">
            <div className="ml-4">
              <ScrollLink to="home" className="text-white capitalize no-underline cursor-pointer hover:underline font-oswald" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </div>
            <div className="ml-4">
              <ScrollLink to="about" className="text-white capitalize no-underline cursor-pointer hover:underline font-oswald" smooth={true} duration={500}>
                About
              </ScrollLink>
            </div>
            <div className="ml-4">
              <ScrollLink to="projects" className="text-white capitalize no-underline cursor-pointer hover:underline font-oswald" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </div>
            <div className="ml-4">
              <ScrollLink to="contact" className="text-white capitalize no-underline cursor-pointer hover:underline font-oswald" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </div>
          </div>
        </nav>
      </div>

      {/* Home Section */}
      <div id="home" className="content flex flex-col h-[600px] md:flex-row md:gap-48 sm:pt-8 sm:gap-8 items-center justify-center md:pt-24 md:px-[100px]">
        <div className="Name pl-0 md:pl-12 pt-12 flex flex-col gap-6 text-center md:text-left">
          <h1 className="kanit-semibold text-gray-500 text-3xl sm:text-4xl mb-0">Sahil Chhabra</h1>
          <h1 className="oswald-unique text-purple-700 uppercase text-3xl sm:text-4xl mt-0 font-normal">
            <b>Full Stack <br /> Web Developer</b>
          </h1>
          <ScrollLink to='projects' className="home-button bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out hover:bg-purple-800" onClick={''}>
            View My Work
          </ScrollLink>
        </div>
        <div className="Image-container w-[550px] sm:w-[350px] h-[350px] flex justify-end items-center relative">
          <img className="Image w-full h-full rounded-full object-cover" src={profilePhoto} alt="Profile" />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="Aboutt bg-black">
        <div className="Abouts flex flex-col sm:flex-row p-6 sm:p-10 pt-24 gap-10">
          <img src={Image} className="Image1 sm:w-1/3 h-auto rounded-lg sm:ml-5 sm:block hidden" alt="About Me" />
          <div className="section flex flex-col sm:ml-10">
            <h1 className="anton-regular text-3xl text-white font-bold uppercase">About Me</h1>
            <p className="kanit-semibold text-white mt-4 text-lg">
              I am Sahil Chhabra, a dedicated student pursuing a Bachelor's degree in Computer Science at Chandigarh University, Gharuan. My academic journey is complemented by a strong passion for technology and a commitment to continuous learning and growth.
            </p>
          </div>
        </div>

        <div className="Education flex flex-col sm:flex-row ml-24 sm:ml-16 mt-10 gap-10">
          <div className="aa mt-5">
            <h1 className="anton-regular text-3xl font-bold text-white uppercase">Education</h1>
            <p className="kanit-semibold text-white mt-4 text-lg">
              <ul className="list-disc pl-10">
                <li>Bachelors in Computer Science, Chandigarh University, Gharuan</li>
                <li>Session: 2021-2025, CGPA: 6.16</li>
                <li>Intermediate (CBSE), GMSSS 22A Chandigarh, Session: 2020-2021, Percentage: 60%</li>
                <li>Matriculation (CBSE), AKSIPS 65 Mohali, Session: 2018-2019, Percentage: 74.6%</li>
              </ul>
            </p>
          </div>
          <img src={Image1} className="I1 sm:w-1/3 h-auto rounded-lg sm:mr-5 hidden sm:block" alt="Education" />
        </div>

        <div className="Skills mt-10 font-bold m-10 ml-24 sm:ml-16">
          <h1 className="anton-regular text-3xl text-white uppercase">Skills</h1>

          <h2 className="kanit-semibold text-white mt-6">Front-End Technologies:</h2>
          <div className="frontend flex justify-center gap-10 flex-wrap mt-4">
            <img src={Reacti} width={100} alt="React Logo" />
            <img src={css} width={100} alt="CSS Logo" />
            <img src={html} width={100} alt="HTML Logo" />
            <img src={js} width={100} alt="JavaScript Logo" />
            <img src={tl} width={100} alt="Tailwind CSS Logo" />
          </div>

          <h2 className="kanit-semibold text-white mt-6">Back-End Technologies:</h2>
          <div className="frontend flex justify-center gap-10 flex-wrap mt-4">
            <img src={python} width={100} alt="Python Logo" />
            <img src={django} width={100} alt="Django Logo" />
            <img src={node} width={100} alt="Node.js Logo" />
            <img src={express} width={100} alt="Express Logo" />
          </div>

          <h2 className="kanit-semibold text-white mt-6">Databases</h2>
          <div className="frontend flex justify-center gap-10 flex-wrap mt-4">
            <img src={mongo} width={100} alt="MongoDB Logo" />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-5">
        <h1 className="text-5xl text-gray-500 uppercase text-center mb-8">Projects</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <Cards
              images={Mancot}
              title="Mancot"
              href="https://frontend-snowy-pi-75.vercel.app/"
              Description="Mancot is a street style brand developed using the MERN stack (MongoDB, Express.js, React, and Node.js). The website showcases a dynamic catalog, enabling customers to explore and purchase trendy apparel online."
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <Cards
              images={BlissBakerss}
              title="Bliss Bakerss"
              href="https://b-bfrontend.vercel.app/"
              Description="Bliss Bakerss is a delightful bakery offering a range of delicious cakes, cupcakes, and pastries. The website features an elegant catalog where customers can explore and order handcrafted treats."
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="flex flex-col justify-center font-bold items-center bg-black py-10 px-5">
        <h1 className="text-4xl sm:text-5xl font-oswald text-white text-center mb-8 uppercase">Contact Me</h1>
        <div className="text-white text-lg sm:text-xl space-y-4">
          <h2 className="text-sm sm:text-xl">Phone: <span className="text-gray-300">+91 6283974824</span></h2>
          <h2 className="text-sm sm:text-xl">Email: <span className="text-gray-300">sahilchhabra1551@gmail.com</span></h2>
          <h2 className="text-sm sm:text-xl">Address: <span className="text-gray-300">#1441/4 Phase 11 Mohali</span></h2>
          <h2 className="text-sm sm:text-xl">LinkedIn: <a href="https://www.linkedin.com/in/sahil-chhabra-141b0621a/" className="text-purple-500">LinkedIn Profile</a></h2>
        </div>
      </div>
    </div>
  );
};

export default navbar;
