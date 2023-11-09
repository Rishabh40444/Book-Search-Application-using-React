import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About WikiBooks</h2>
            <p className='fs-17'>Books</p>
            <p className='fs-17'>This website is developed using modern web programming technologies such as React,Javascript,HTML,CSS.
              It also equipped with the Open library Search API(application programming Interface) which allows users
              to browse books of different genres.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
