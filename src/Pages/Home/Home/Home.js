import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Intro from '../Inro/Intro';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Intro></Intro>
            <Features></Features>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;