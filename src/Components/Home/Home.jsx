import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Qualification from '../Qualification/Qualification';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
        <Experience></Experience>
            <Project></Project>
            <Qualification></Qualification>
          <Contact></Contact>
          
           
        </div>
    );
};

export default Home;