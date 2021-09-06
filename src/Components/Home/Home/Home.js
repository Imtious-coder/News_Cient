import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import News from '../News/News';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <News />
            <Footer />
        </div>
    );
};

export default Home;