import '../styles/App.scss';
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './Navbar';
import Homepage from './Homepage';
import Footer from './Footer';

function App() {
  return (
    <>
      <Helmet >
        <title>LFX Media</title>
        <meta name='description' content='I build beautiful and effective online stores that help businesses succeed.'/>
        <meta name='keywords' content='Front End Developer, Full Stack Engineer &amp; SEO Manager' />
      </Helmet>
      <div className='app'>
        <Navbar />
        <Switch>
          <Homepage />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
