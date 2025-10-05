import React from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-sidebar">
                <div className="sidebar-card">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="sidebar-card">
                    <h3>Features</h3>
                    <ul>
                        <li>Student Directory</li>
                        <li>Networking</li>
                        <li>Showcase Talent</li>
                        <li>Connect Peers</li>
                    </ul>
                </div>
            </div>

            <div className="about-main">
                <div className="about-header">
                    Welcome to TheNeuralNets!
                </div>

                <div className="about-content">
                    <div className="about-section">
                        <h1><b>[ Welcome to TheNeuralNets! ]</b></h1>
                        <p>
                            TheNeuralNets is an online directory developed by students of <b>DTU</b> and 
                            <b> developed</b> for the <b>DTU</b> students to connect and network with each 
                            other fellow students of this <b>university</b>.
                        </p>
                    </div>

                    <div className='about-features'>
                        <p>You can use TheNeuralNets to:</p>
                        <ul>
                            <li>Search for people that match your vibe</li>
                            <li>Showcase your talent</li>
                            <li>Connect/Network with other students</li>
                            <li>New and clutter-free social platform</li>
                        </ul>
                    </div>

                    <div className='about-cta'>
                        <p>
                            To get started with TheNeuralNets, register yourself to the directory 
                            and share it with your friends!
                        </p>
                        <div className="about-buttons">
                            <Link to="/register"><button className="btn-primary">Register</button></Link>
                            <Link to="/login"><button className="btn-secondary">Login</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
