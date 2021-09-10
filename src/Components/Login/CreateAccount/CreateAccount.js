import React, { useState } from 'react';
import './CreateAccount.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from '../../../firebase.config';
import Footer from '../../Home/Footer/Footer';

const app = initializeApp(firebaseConfig);

const CreateAccount = () => {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleNewUser = () => {
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const NewUserData = {
            name: name,
            email: email,
            password: password
        }

        setNewUser(NewUserData);
        console.log(newUser);

        fetch('https://young-reaches-38800.herokuapp.com/newUser', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    return (
        <section>
            <section className="CreateAccount mb-5">
            <form onSubmit={handleNewUser} action="/newUser" className="Form">
                <p className="text-3xl font-bold text-center">Create your account</p>
                <p className="Input-Titles">Name:</p>
                <input id="name" className="Input" type="text" placeholder="Your Full Name" required />
                <p className="Input-Titles">Email:</p>
                <input id="email" className="Input" type="email" placeholder="Email" required />
                <p className="Input-Titles">Password:</p>
                <input id="password" className="Input" type="password" placeholder="Password" required />
                <button type="submit" className="Create-AccountButton">Create Account</button>
            </form>
        </section>
        <Footer />
        </section>
    );
};

export default CreateAccount;