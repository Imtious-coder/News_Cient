import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
    return (
        <section className="CreateAccount">
            <form action="/" method="POST" className="Form">
                <p className="text-3xl font-bold text-center">Create your account</p>
                <p className="Input-Titles">Name:</p>
                <input className="Input" type="text" placeholder="Your Full Name" required />
                <p className="Input-Titles">Email:</p>
                <input className="Input" type="email" placeholder="Email" required />
                <p className="Input-Titles">Password:</p>
                <input className="Input" type="password" placeholder="Password" required />
                <button type="submit" className="Create-AccountButton">Create Account</button>
            </form>
        </section>
    );
};

export default CreateAccount;