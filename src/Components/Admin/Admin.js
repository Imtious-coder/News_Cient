import React, { useState } from 'react';
import './Admin.css';
import Footer from '../Home/Footer/Footer'
import NewsData from '../News.json';

const Admin = () => {

    const [newdata, setNewData] = useState({
        title: "",
        author: "",
        description: "",
        category: "",
        image: "",
    })

    const handleData = () => {
        const title = document.getElementById("title").value
        const author = document.getElementById("author").value
        const description = document.getElementById("description").value
        const category = document.getElementById("category").value
        const image = document.getElementById("image").value

        setNewData({
            title: title,
            author: author,
            description: description,
            category: category,
            image: image
        })

        console.log(newdata)

        fetch('http://localhost:5000/addNews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newdata)
        })
    }
    return (
        <section>
            <section className="grid grid-cols-1 md:grid-cols-3 px-5 py-5">
                {/* Navigations.. */}
                <section className="flex justify-center mt-5 mb-5">
                    <div className="AdminNavigation">
                        <p className="font-bold text-center text-2xl">Admin</p>
                        <div>
                            <p className="ADD">Add Admin</p>
                            <p className="ADD">Add News</p>
                        </div>
                    </div>
                </section>
                {/* Right Side */}
                <section className="flex justify-center mt-5 mb-5">
                    <form className="NewsForm">
                        <p className="Input-Titles">Title:</p>
                        <input id="title" className="NewsInput" type="text" placeholder="Add a title here" required />
                        <p className="Input-Titles">Author:</p>
                        <input id="author" className="NewsInput" type="text" placeholder="Author name" required />
                        <p className="Input-Titles">Category:</p>
                        <select id="category" className="border-2 p-1">
                            <option>Movie</option>
                            <option>COVID</option>
                            <option>International</option>
                            <option>Local</option>
                            <option>Entertainment</option>
                            <option>Style</option>
                            <option>Health</option>
                            <option>Travel</option>
                            <option>Business</option>
                            <option>Food</option>
                        </select>
                        <p className="Input-Titles">Description:</p>
                        <textarea id="description" className="NewsInput" type="text" placeholder="Description" required />
                        <input id="image" className="mt-5" type="file" />
                        <button onMouseOver={handleData} onClick={handleData} type="submit" className="Create-AccountButton">Add</button>
                    </form>
                </section>
            </section>
            <Footer />
        </section>
    );
};

export default Admin;