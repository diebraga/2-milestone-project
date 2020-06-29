/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/globals';

import RepoContext from './context/contextAddRepo';

const App: React.FC = () => {
  return (
    <>
      <RepoContext.Provider value={{ full_name: '', description: '' }}>
        <Router>
          <Routes />
        </Router>
      </RepoContext.Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
