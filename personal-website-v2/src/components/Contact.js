import React from "react";
import "../components-css/Contact.css";
import pdf from "../images/Angela-Deng-Resume.pdf";
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";
import resumeImg from "../images/resume.png";

export default function Contact(){
    return(
        <div>
            <div id = "footer">
                <div id = "contact-text">
                <h2>Connect With Me!</h2>
                <p>I'm always looking to network, chat, or collaborate on any projects.<br/>My resume is linked below, alongside my github and linkedIn.</p>
                </div>
                <div id = "contact">
                    <a href = {pdf}><img src = {resumeImg} alt = "link to resume"></img></a>
                        <a href = "https://github.com/angeladeng423"><img src = {github} alt = "link to github"></img></a>
                        <a href = "https://www.linkedin.com/in/angela-deng-2414ba175/"><img src = {linkedIn} alt = "link to linkedIn"></img></a>
                </div>
            </div>
            <div id = "bottom">
                <p>Copyright 2024 © Angela Deng</p>
            </div>
        </div>
    )
}