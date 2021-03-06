import React from "react";
import "./Home.css"

function Home() {
    var config = require('../config');

    var links = [
        {
            title: "DB viewer",
            url: config.mongo_express
        },
        {
            title: "Backend API options",
            url: config.api_list 
        }
    ]

    return (
        <div className="home-flex-container">
            <h1>Home</h1>
            <div className="home-info-container">
                <h3>Welcome to my home automation system.</h3>
                <p>
                    Please find the following links to help you around the system.
                </p>
                <ul>
                    {links.map((item, index) => {
                        return (
                            <li key={"home_li_" + index}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Home;