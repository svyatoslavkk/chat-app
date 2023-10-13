import React from "react";
import avatarImg from '../Images/avatar.jpg';

export default function Message () {
    return (
        <div className="message">
            <img className="message-avatar" src={avatarImg} alt="Message Avatar" />
            <div className="message-block">
                <div className="message-info">
                    <h4 className="message-user">Magdalena Pomorska</h4>
                    <p className="message-time">16:20</p>
                </div>
                <div className="message-content">
                    <p className="message-text">hello world</p>
                </div>
            </div>
        </div>
    )
}