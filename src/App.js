import React from 'react';
import ReactGA from 'react-ga';

import Routes from './components/Routes'

ReactGA.initialize('UA-130579013-1');

const App = () => {
    return (
        <Routes />
    );
}

export default App;