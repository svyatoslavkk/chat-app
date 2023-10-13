import React, { useState } from "react";
import avatarImg from '../Images/avatar.jpg';
import SearchIcon from "../Icons/SearchIcon";
import HeartIcon from "../Icons/HeartIcon";

export default function MainPage () {
    const chatrooms = [
        {
            username: 'Bożenka Malina',
        },
        {
            username: 'Anastazja Ziemkowska',
        },
        {
            username: 'Magdalena Pomorska',
        },
        {
            username: 'Martina Wolna',
        },
    ]

    const chats = [
        {
            username: 'Bożenka Malina',
            message: 'what u mean?',
            date: '5m',
        },
        {
            username: 'Anastazja Ziemkowska',
            message: 'i am on the spot',
            date: '12m',
        },
        {
            username: 'Magdalena Pomorska',
            message: 'come here on 5 pm',
            date: '1h',
        },
    ]

    return (
        <div className="container">
            <header className="header">
                <h1>Messages</h1>
                <img className="avatar-img" src={avatarImg} alt="Avatar Image" />
            </header>
            <main>
                <div className="input-search-block">
                    <SearchIcon />
                    <input className="input-classic" placeholder="Search" />
                </div>
                <div className="recommended-block">
                    <h2 className="slider-title">Chatrooms</h2>
                    <div className="chat-slider">
                        {chatrooms.map((item: any) => (
                        <div className="chat-slider-item">
                            <p className="chat-slider-item-username">{item.username}</p>
                            <HeartIcon />
                        </div>
                        ))}
                    </div>
                </div>
                <div className="chats">
                    {chats.map((item: any) => (
                    <div className="chat-item">
                        <div className="info">
                            <div className="user-image-content">
                                <div className="counter-new-messages">+1</div>
                                <img className="user-image" src={avatarImg} alt="User Image" />
                            </div>
                            <div className="text-info">
                                <h4 className="username">{item.username}</h4>
                                <p className="last-message">{item.message}</p>
                            </div>
                        </div>
                        <div className="date">
                             <p>{item.date}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </main>
        </div>
    )
}