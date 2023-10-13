import React from "react";
import PictureIcon from "../Icons/PictureIcon";

export default function Register () {
    return (
        <div className="container">
             <div className="register">
                <h1 className="register-title">Register</h1>
                <form className="form">
                    <div className="input-group">
                        <label>Username</label>
                        <input className="input-classic" type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input className="input-classic" type="password" name="password" id="password" placeholder="" />
                    </div>
                    <div className="input-group avatar">
                        <label htmlFor="file">
                            <PictureIcon />
                            <p>Add an avatar</p>
                        </label>
                        <input className="input-classic avatar" type="file" name="file" id="file" placeholder="" />
                    </div>
                    <button className="sign">
                        Sign Up
                        <span></span>
                    </button>
                </form>
                <p className="signup">Already have an account? <a rel="noopener noreferrer" href="#" className="">Log in</a>
                </p>
             </div>
        </div>
    )
}