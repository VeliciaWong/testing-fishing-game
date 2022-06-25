import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './components/menu/ScrollToTop';
import Header from './components/menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Activity from './pages/activity';

import { createGlobalStyle } from 'styled-components';
import { Astar, DAppProvider } from '@usedapp/core';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);


const config = {
  networks: [Astar],
  readOnlyChain: Astar.Mainnet,
  readOnlyUrls: {
    [Astar.chainId]: 'https://astar.blastapi.io/d4c29a53-4abb-47bc-aba6-4406df1a574b',
  },
};

const app= () => (
  <div className="wraper">
  <GlobalStyles />
  <DAppProvider config={config}>
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/Home" />
        </Home>
        <Explore path="/Explore" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Wallet path="/Wallet" />
        <Activity path="/Activity" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
  </DAppProvider>
    
  </div>
);
export default app;