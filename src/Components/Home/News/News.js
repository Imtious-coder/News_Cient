import React, { useEffect, useState } from 'react';
import './News.css';
import NewsData from '../../News.json';

const News = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(NewsData);
    }, [])

    const Movie = () => {
        setData(NewsData.slice(0,2))
    }
    const COVID = () => {
        setData(NewsData.slice(2,4))
    }
    const International = () => {
        setData(NewsData.slice(4,6))
    }
    const Local = () => {
        setData(NewsData.slice(6,8))
    }
    const Entertainment = () => {
        setData(NewsData.slice(8,10))
    }
    const Style = () => {
        setData(NewsData.slice(10,12))
    }
    const Health = () => {
        setData(NewsData.slice(12,14))
    }
    const Travel = () => {
        setData(NewsData.slice(14,16))
    }
    const Business = () => {
        setData(NewsData.slice(16,18))
    }
    const Food = () => {
        setData(NewsData.slice(18,20))
    }
    return (
        <section className="px-5 py-10 bg-blue-50">
            {/* Heading */}
            <p className="font-bold text-3xl py-3">News</p>
            {/* Categories Start */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 Categories md:mx-16 flex font-bold">
                <p onClick={Movie}>Movie</p>
                <p onClick={COVID}>COVID</p>
                <p onClick={International}>International</p>
                <p onClick={Local}>Local</p>
                <p onClick={Entertainment}>Entertainment</p>
                <p onClick={Style}>Style</p>
                <p onClick={Health}>Health</p>
                <p onClick={Travel}>Travel</p>
                <p onClick={Business}>Business</p>
                <p onClick={Food}>Food</p>
            </div>
            {/* Categories End */}

            {/* News Start */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    data.map((e) => {
                        return (
                            <div className="flex shadow p-2 News">
                                <div className="MainNewsImages">
                                    <img className="MainNewsImage" src={e.image} alt="" />
                                    <button className="ReadMoreButton">Read more</button>
                                </div>
                                <div className="ml-2">
                                    <p className="NewsTitle">{e.title}</p>
                                    <p className="NewsAuthor">Author: {e.author}</p>
                                    <p className="NewsDescription">{e.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    );
};

export default News;