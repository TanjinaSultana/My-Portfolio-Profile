import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Qualification from '../Qualification/Qualification';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Qualification></Qualification>
          
           
        </div>
    );
};

export default Home;