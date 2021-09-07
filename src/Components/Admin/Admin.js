import React from 'react';
import './Admin.css';
import Footer from '../Home/Footer/Footer'

const Admin = () => {
    return (
        <section>
            <section className="grid grid-cols-1 md:grid-cols-3 px-5 py-5">
                {/* Navigations.. */}
                <section className="flex justify-center">
                    <div className="AdminNavigation">
                        <p className="font-bold text-center text-2xl">Admin</p>
                        <div>
                            <p className="ADD">Add Admin</p>
                            <p className="ADD">Add News</p>
                        </div>
                    </div>
                </section>
                {/* Right Side */}
                <section className="flex justify-center">
                    <form action="/" method="POST" className="NewsForm">
                        <p className="Input-Titles">Title:</p>
                        <input className="NewsInput" type="text" placeholder="Add a title here" required />
                        <p className="Input-Titles">Author:</p>
                        <input className="NewsInput" type="text" placeholder="Author name" required />
                        <p className="Input-Titles">Description:</p>
                        <textarea className="NewsInput" type="text" placeholder="Description" required />
                        <input className="mt-5" type="file" />
                        <button type="submit" className="Create-AccountButton">Add</button>
                    </form>
                </section>
            </section>
            <Footer />
        </section>
    );
};

export default Admin;