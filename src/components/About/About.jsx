import React from "react";
import "./About.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        subHeading="Full Stack Developer | Competitve Programmer"
      ></Header>
      <div className="about-main">
        <div className="about-main-left">
          <h3 className="about-sub-heading">Developer</h3>
          <p className="about-sub-heading-details">
            I’m a self-taught <u>full stack developer</u>, interested in
            building applications. I love building applications that solves
            real-world problems, add value to society through technology.
          </p>
          <h3 className="about-sub-heading">Competitve Programmer</h3>
          <p className="about-sub-heading-details">
            I've been learning Data Structures and Algorithms for over a year
            and enjoy solving problems using them. I have a rating of{" "}
            <b>1606</b> on Leetcode and a highest rank of <b>2973</b> out of{" "}
            <b>23114 participants</b> on Leetcode Weekly Contest. You can check
            out my{" "}
            <a
              href="https://leetcode.com/ks20soni/"
              target="_blank"
              rel="noreferrer"
            >
              Leetcode Profile!
            </a>
          </p>
        </div>
        <div className="about-main-right">
          <img
            src={aboutAnime}
            alt="about-anime"
            className="about-anime"
            loading="lazy"
          />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      ></Footer>
      <div className="vector-frame">
        <img
          src={aboutVector}
          alt="about"
          className="about-vector"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default About;
