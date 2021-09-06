import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <section className="Login mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <form className="LoginForm" action="/" method="POST">
                    <p className="font-bold text-2xl">Login</p>
                    <p className="InputsTitle">Email: </p>
                    <input className="Inputs" type="text" placeholder="Email" required />
                    <p className="InputsTitle">Password: </p>
                    <input className="Inputs" type="password" placeholder="Password" required />
                    <br />
                    <button className="LoginFormButton" type="submit">Login</button>
                </form>
                <section className="GoogleLogin">
                    <div>
                        <p className="font-bold text-lg text-center">or</p>
                        <button className="GoogleLoginButton">Login with GOOGLE</button>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LoginPage;