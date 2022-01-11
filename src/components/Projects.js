import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.scss'

export default function Projects() {
    return (
        <>
            <section id='projects'>
                <h2>Featured Work</h2>
                <p className='h3'>Here are a few professional projects I have recently built. Want to see more? <span><Link className='email' to='/'>Email me.</Link></span></p>
                <ul>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/leysa.png' alt='Leysa' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Leysa Carrillo is a nationally recognized industry leader for her hair color transformations on textured hair. She is the founder of Foreveer Curls Academy where she provides education for hair stylists around the world.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a href='https://forevercurlsbyleysa.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'
                                    >
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>                  
                    </li>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/SAH.png' alt='Social Arthouse' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>A pro-beauty management and creative agency, offering an expansive consulting experience for brands through ingenuity, originality and imagination.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.socialarthouse.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/ouidad.png' alt='Ouidad' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Ouidad believes that curly hair is a gift to be embraced and celebrated. They are dedicated to empowering every curly haired individual to understand and love their fabulous hair!</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://ouidadeducation.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/THE.png' alt='Textured Hair Elevated' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>T.H.E. Awards is one of the newest inaugural hair competitions that celebrates the dynamic range of artistry of the industry's most brilliant, multicultural professional and student "texperts" across the country.</p>
                            </div>
                            
                            <div className='btn-wrap'>
                                <a  href='https://texturedhairelevated.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/omg.png' alt='OMG Artistry' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Published Celebrity Hair and Makeup Artist for Paris Hilton, Nick Jonas, Britney Spears NYFW Show, Joico Brand Storyteller, Key Note Speaker for Modern Salon, Top 100 Influencers on Modern Salon, and more.</p>    
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.omgartistry.com/'
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='btn'>
                                        View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                    <li className='card'>
                        <div className='image-wrap'>
                            <img src='images/Michelle-text.png' alt='Michelle O Connor' />
                        </div>
                        <div className='content-wrap'>
                            <div className='text-wrap'>
                                <p>Michelle O'Connor is a five-time NAHA-winning hairstylist, trailblazer, influencer, educator, Matrix global artistic director, and an emerging voice on diversity and inclusion within the beauty industry.</p>
                            </div>
                            <div className='btn-wrap'>
                                <a  href='https://www.michelleoconnorbeauty.com/'
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='btn'>
                                    View Website &#8594;
                                </a>
                            </div>
                        </div> 
                    </li>
                </ul>
            </section>
        </>
    )
}