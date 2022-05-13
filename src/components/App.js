import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Footer from './Footer';
import NotFound from './pages/NotFound';
import Results from './pages/Results';
import Subscribe from './pages/Subscribe';
import LoadingScreen from './LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8800);
  }, [])

  if (loading) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  return (
    <>
      <Helmet >
        <title>LFX Media | Web Developer, Full-stack Engineer, &amp; SEO Manager</title>
        <meta name='description' content='Lachlan Franckx | Builder of Graceful Digital Stories | I design and code beautiful yet simple things and love what I do.'/>
        <meta name='keywords' content='Lachlan Franckx, Web Developer, Full-stack Engineer, Web Designer, &amp; SEO Manager' />
      </Helmet>
      <div className='app'>
        <Navbar />
        <LoadingScreen loading={loading} />
        <AnimatePresence>
          <Switch >
            <Route exact path="/" render={() => <Homepage loading={loading}/>} />
            <Route exact path='/contact' render={() => <Contact loading={loading}/>} />
            <Route exact path="/results" render={() => <Results loading={loading}/>} />
            <Route exact path="/subscribe" render={() => <Subscribe loading={loading}/>} />
            <Route render={() => <NotFound loading={loading}/>} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(App);
