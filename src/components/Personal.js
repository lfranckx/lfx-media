import React from 'react';
import travelog from '../images/Travelog.png';

export default function Personal() {
    return (
        <section id='personal'>
            <div className='green'>
                <div className='container'>
                    <h2>Personal Projects</h2>
                    <p>I’m constantly trying to challenge myself and learn new technologies. Here are a few of my own passion projects that reflect my personal love for traveling, music, and fitness.</p>
                </div>
            </div>
            
            <ul>
                <li className='card'>
                    <a  href='/'
                        target="_blank" 
                        rel="noopener noreferrer" >
                        <div className="wrap">
                            <div className="image-wrap">
                                <img src={travelog} alt="Travelog"/>
                            </div>
                            <div className="text-wrap">
                                <h3>Travelog</h3>
                                <h4>Travel Blogging App</h4>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    )
}