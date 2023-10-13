import React, {useState} from "react";
import avatarImg from '../Images/avatar.jpg';
import SendIcon from "../Icons/SendIcon";
import MicIcon from "../Icons/MicIcon";
import Message from "./Message";

export default function Chat () {
    return (
        <div className="container">
            <header className="chat-header">
                <img className="avatar-img chat-img" src={avatarImg} alt="User Image" />
                <h2 className="chat-username">Magdalena Pomorska</h2>
            </header>
            <main>
                <div className="messages-block">
                    <Message />
                    <Message />
                    <Message />
                </div>
                <div className="chat-input-block">
                    <input className="input-classic" placeholder="Message" />
                    <SendIcon />
                    <MicIcon />
                </div>
            </main>
        </div>
    )
}