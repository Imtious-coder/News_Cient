import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
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
                <section className="GoogleLogin">
                    <div className="py-5">
                        <div>
                            <button className="GoogleLoginButton">Login with GOOGLE</button>
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