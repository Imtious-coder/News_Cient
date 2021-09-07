import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebaseConfig from '../../../firebase.config';
import './LoginPage.css';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";



const app = initializeApp(firebaseConfig);



const LoginPage = () => {

    const [user, setUser] = useState({
        isloggedin: false,
        name: "",
        photo: "",
        email: "",
        type: "visitor"
    })

    const handleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const { displayName, photoURL, email } = result.user;
                setUser({
                    isloggedin: true,
                    name: displayName,
                    photo: photoURL,
                    email: email,
                    type: "visitor"
                })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
        console.log(user)
    }

    const provider = new GoogleAuthProvider();

    return (
        <section className="Login mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <form className="LoginForm" action="/" method="POST">
                    <p className="font-bold text-2xl">Login</p>
                    <p className="InputsTitle">Email: </p>
                    <input className="Inputs" type="email" placeholder="Email" required />
                    <p className="InputsTitle">Password: </p>
                    <input className="Inputs" type="password" placeholder="Password" required />
                    <br />
                    <button className="LoginFormButton" type="submit">Login</button>
                </form>
                {/* Google login */}
                <section className="GoogleLogin">
                    <div className="py-5">
                        <div>
                            <Link to="/admin">
                                <button onMouseOver={handleSignin} onClick={handleSignin} className="GoogleLoginButton">Login with GOOGLE</button>
                            </Link>
                        </div>
                        <div>
                            <p className="font-bold text-md text-center m-0 mt-5 mb-5">Don't have an account?</p>
                            <Link to="/CreateAccount">
                                <button className="CreateAccountButton">Create account</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LoginPage;