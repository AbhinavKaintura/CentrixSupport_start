import React, { useState } from "react";
import axios from "axios";
import './Chat.css';
import logo from "../assets/link-logo.png" 

function Chat() {
    const [input, setInput] = useState("");
    const [response, updateResponse] = useState([{
        txt: "Hello! I'm CentrixSupport and I'm always here to support you. How are you feeling today?",
        is_bot: true
    }]);

    const handleClick = async (e) => {
        console.log("Send button pressed");
        console.log("Text ==> ", input);
        const copyTxt = input;
        setInput("");

        try {
            const res = await axios.post('http://localhost:7000/chat', {
                message: copyTxt
            });

            updateResponse([
                ...response,
                { txt: copyTxt, is_bot: false },
                { txt: res.data.AI, is_bot: true }
            ]);
        } catch (error) {
            console.error("Error updating the response", error);
        }
    };

    const handleEnter = async (e) => {
        if (e.key === 'Enter')
            await handleClick();
    };

    return (
        <div>
            <div className="container">
                <div className="chat-section">
                    <div className="header">
                        CentrixSupport: Your 24/7 Wellness Companion
                    </div>
                    <div className="chat-container">
                        {
                            response.map((message, index) =>
                                <div key={index} className={message.is_bot ? "message bot-message" : "message user-message"}>
                                    <p>{message.txt}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="input-container">
                    <button className="logo-button">
                        <img src={logo} alt="Logo"/>
                    </button>
                    <a></a>
                        <input type="text" placeholder="Share your thoughts..." aria-label="Message input"
                            value={input} onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)} />
                        <button className="greenbtn" type="submit" onClick={handleClick}>Send</button>
                    </div>
                </div>
                <div className="resources-section">
                    <div className="resource-card">
                        <h2>Helpful Resources</h2>
                        <div className="resource-links">
                            <a href="#" className="resource-link">24/7 Crisis Helpline</a>
                            <a href="#" className="resource-link">Meditation Guides</a>
                            <a href="#" className="resource-link">Find a Therapist</a>
                            <a href="#" className="resource-link">Anxiety Management Tools</a>
                        </div>
                    </div>
                    <div className="resource-card">
                        <div className="disclaimer">
                            Remember: While I'm here to support you, I'm not a replacement for professional mental health care. If you're in crisis, please reach out to emergency services or a crisis helpline.
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                KubeCentrix@DIT-Hackathon
            </div>
        </div>
    );
}

export default Chat;