import React from 'react';
import { useParams } from 'react-router';
import './NewsDetails.css';
import Footer from '../Home/Footer/Footer'

const NewsDetails = () => {
    const {newsId} = useParams()
    return (
        <section>
            This is lol{newsId}
            <Footer />
        </section>
    );
};

export default NewsDetails;