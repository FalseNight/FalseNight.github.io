import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './home/Home';

import blogPosts from '../constants/blogPosts';
import portfolio from '../constants/portfolio';
import Portfolio from './Portfolio/Portfolio';

const Routes = () => { 
    const logPageView = () => {
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    logPageView();

    return (
        <Router basename={process.env.PUBLIC_URL}> 
            <Switch >
                {
                    blogPosts.map( ({route, component}) => 
                        <Route exact path={route} component={component} />
                    )
                }
                {
                    portfolio.map( ({route, component}) => 
                        <Route exact path={route} component={component} />
                    )
                }
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/' component={Home} />
                <Redirect to='/' />
            </Switch>
        </Router>
    );
}

export default Routes;