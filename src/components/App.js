import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
    }, 2000);
  }, [])

  return (
    <>
      <Helmet >
        <title>LFX Media | Web Developer, Full-stack Engineer, &amp; SEO Manager</title>
        <meta name='description' content='Lachlan Franckx | Web Developer, Full-stack Engineer, Web Designer, &amp; SEO Manager | I build beautiful and effective websites and online stores that help businesses succeed.'/>
        <meta name='keywords' content='Lachlan Franckx, Web Developer, Full-stack Engineer, Web Designer, &amp; SEO Manager' />
      </Helmet>

      <LoadingScreen loading={loading} />

      <div className={'app'}>
        <Navbar loading={loading} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
      
    </>
  );
}

export default withRouter(App);
