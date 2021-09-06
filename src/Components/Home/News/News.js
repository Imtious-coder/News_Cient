import React, { useEffect, useState } from 'react';
import './News.css';
import NewsData from '../../News.json';
import { Link } from 'react-router-dom';

const News = () => {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([
        "Movie",
        "COVID",
        "International",
        "Local",
        "Entertainment",
        "Style",
        "Health",
        "Travel",
        "Business",
        "Food"
    ])
    useEffect(() => {
        setData(NewsData);
    }, [])

    const NewData = (e) => {
        const Text = document.getElementById("text").innerHTML;
        setData(NewsData.filter(news => news.category === Text))
    }

    return (
        <section className="px-5 py-10 bg-blue-50">
            {/* Heading */}
            <p className="font-bold text-3xl py-3">News</p>
            {/* Categories Start */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 Categories md:mx-16 flex font-bold">
                {
                    categories.map(category => {
                        return (
                            <p id="text" onClick={NewData}>{category}</p>
                        )
                    })
                }
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
                                    <Link to={"/news/" + e.id}>
                                        <button className="ReadMoreButton">Read more</button>
                                    </Link>
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
            {/* News end */}
        </section>
    );
};

export default News;