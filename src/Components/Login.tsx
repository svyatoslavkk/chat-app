import React from "react";

export default function Login () {
    return (
        <div className="container">
             <div className="login">
                <h1 className="register-title">Login</h1>
                <form className="form">
                    <div className="input-group">
                        <label>Username</label>
                        <input className="input-classic" type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input className="input-classic" type="password" name="password" id="password" placeholder="" />
                        <div className="forgot">
                            <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                        </div>
                    </div>
                    <button className="sign">
                        Log In
                        <span></span>
                    </button>
                </form>
                <p className="signup">Don't have an account? <a rel="noopener noreferrer" href="#" className="">Sign Up</a>
                </p>
             </div>
        </div>
    )
}