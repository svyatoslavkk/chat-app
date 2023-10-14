import React, { useState } from "react";
import PictureIcon from "../Icons/PictureIcon";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../Firebase/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

export default function Register () {
    const [error, setError] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
                (error) => {
                    setError(true);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        })
                    });
                }
            );
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="container">
             <div className="register">
                <h1 className="register-title">Register</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username</label>
                        <input className="input-classic" type="text" name="username" id="username" placeholder="" />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input className="input-classic" type="text" name="email" id="email" placeholder="" />
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
                    {error && "Something went wrong"}
                </form>
                <p className="signup">Already have an account? <a rel="noopener noreferrer" href="#" className="">Log in</a>
                </p>
             </div>
        </div>
    )
}