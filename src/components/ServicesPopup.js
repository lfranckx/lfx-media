import React from 'react';
import '../styles/ServicesPopup.scss';

export default function ServicesPopup(props) {
    const { designCardOpen, developmentCardOpen, seoCardOpen } = props;

    return (
        <>
            <div id={'services-popup'}>
                    <div className={designCardOpen ? 'content' : 'hide'}>
                        <div>
                            <h2>Web Design &mdash; Creating the look &amp; feel of your website</h2>
                            <p>I value simple content structure, clean design patterns, and thoughtful interactions. The audience should have an enjoyable, positive experience when using your website. Whether their objective is to read some content, browse items your selling, or watching a video, every moment should be clear and easy for the user to understand.</p>
                        </div>
                        <div>
                            <h3>Things I enjoy designing:</h3>
                            <p>UX, UI, Web, Mobile, Apps</p>
                        </div>
                        <div>
                            <h3>Design Tools:</h3>
                            <p>Figma</p>
                            <p>InVision</p>
                            <p>Canva</p>
                            <p>Pen &amp; Paper</p>
                        </div>
                    </div>

                    <div className={developmentCardOpen ? 'content' : 'hide'}>
                        <div>
                            <h2>Web Development</h2>
                            <p>I like to code things from scratch and enjoy bringing ideas to life in the browser. I specialize in a wide array of technologies used for building full-stack web applications. Need someone to help with your eCommerce store as well? I got you covered. I also provide full Shopify theme development to create custom themes that suit your needs. My experience as a full-stack engineer also includes crafting web applications that can integrate into your online store to enhance your eCommerce capabilities.</p>
                        </div>
                        <div>
                            <h3>Languages I speak:</h3>
                            <p>JavaScript, HTML, CSS, Java</p>
                        </div>
                        <div>
                            <h3>Frameworks &amp; Technologies</h3>
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Node.js</li>
                                <li>PostreSQL</li>
                                <li>Amazon Web Services</li>
                                <li>SASS/SCSS</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                                <li>Liquid</li>
                                <li>RESTful APIs</li>
                                <li>AJAX</li>
                                <li>Git/Github</li>
                                <li>Terminal</li>
                            </ul>
                        </div>
                    </div>

                    <div className={seoCardOpen ? 'content' : 'hide'}>
                        <div>
                            <h2>Search Engine Optimization</h2>
                            <p>Want your company to maintain the top spot of Google Search engine results? When deploying your website I make sure that all of the keywords, meta tags, meta descriptions, images, and videos are optimized for search engines like Google to best understand your website. I use Google Analytics to generate detailed reports about your website’s traffic, visitor’s keywords, number of visitors, how the visitors have found your website and where they have accessed it from. Using this information I can understand how to improve the flow of visitors to your website by fine-tuning the SEO.</p>
                        </div>
                        <div>
                            <h3>Why you need SEO:</h3>
                            <ol>
                                <li>Increased traffic to your business</li>
                                <li>Save money on your marketing budget</li>
                                <li>Stay above local competitors</li>
                                <li>Improved user experience</li>
                            </ol>
                        </div>
                        <div className='btn-wrap'>
                            <button>See my results <i className="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </div>
                </div>
        </>
    )
}