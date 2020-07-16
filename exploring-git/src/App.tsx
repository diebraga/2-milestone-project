import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/globals';

import { RepoProvider } from './_context/contextAddRepo';

const App: React.FC = () => {
  return (
    <>
      <RepoProvider>
        <Router>
          <Routes />
        </Router>
      </RepoProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
