import '../styles/App.scss';
import React, { useState, useEffect } from 'react';
import { withRouter, Switch, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTransition, animated } from 'react-spring';

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
    }, 13000);
  }, [])

  if (loading) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  const location = useLocation();
  const transitions = useTransition(location, {
    keys: (location) => location.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      <Helmet >
        <title>LFX Media | Web Developer, Full-stack Engineer, &amp; SEO Manager</title>
        <meta name='description' content='Lachlan Franckx | Web Developer, Full-stack Engineer, Web Designer, &amp; SEO Manager | I build beautiful and effective websites and online stores that help businesses succeed.'/>
        <meta name='keywords' content='Lachlan Franckx, Web Developer, Full-stack Engineer, Web Designer, &amp; SEO Manager' />
      </Helmet>

      {/* <LoadingScreen loading={loading} /> */}

      <div className={loading ? 'app loading' : 'app'}>
        <Navbar loading={loading} />
        {transitions.map((styles, item) => (
          <animated.div style={styles}>
            <Switch location={item}>
              <Route exact path="/" component={Homepage} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path="/results" component={Results} />
              <Route exact path="/subscribe" component={Subscribe} />
              <Route component={NotFound} />
            </Switch>
          </animated.div> 
        ))}
        <Footer />
      </div>
    </>
  );
}

export default withRouter(App);
