import '../styles/App.scss';
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './Navbar';
import Homepage from './Homepage';
import Contact from './Contact'
import Footer from './Footer';
import ThankYou from './ThankYou';
import NotFound from './NotFound';

function App() {
  return (
    <>
      <Helmet >
        <title>LFX Media | Front-end Developer, Full-stack Engineer, SEO Manager</title>
        <meta name='description' content='I build beautiful and effective online stores that help businesses succeed.'/>
        <meta name='keywords' content='Front End Developer, Full Stack Engineer &amp; SEO Manager' />
      </Helmet>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/thankyou' component={ThankYou} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default withRouter(App);
