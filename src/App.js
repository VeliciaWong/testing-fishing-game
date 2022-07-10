import React from "react";
import { Router, Location, Redirect } from "@reach/router";
import ScrollToTopBtn from "./components/menu/ScrollToTop";
import Header from "./components/menu/header";
import Home from "./pages/home";
import Explore from "./pages/explore";
import ItemDetail from "./pages/ItemDetail";
import Author from "./pages/Author";
import Wallet from "./pages/wallet";
import Activity from "./pages/activity";

import { createGlobalStyle } from "styled-components";
import { DAppProvider } from "@usedapp/core";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Shibuya } from "./consts/chains";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id="routerhang">
        <div key={location.key}>
          <Router location={location}>{children}</Router>
        </div>
      </div>
    )}
  </Location>
);

const dAppConfig = {
  networks: [Shibuya],
  readOnlyChain: Shibuya.chainId,
  readOnlyUrls: {
    [Shibuya.chainId]: "https://evm.shibuya.astar.network",
  },
};

const apolloClient = new ApolloClient({
  uri: "http://34.123.209.152:4350/graphql",
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient()

const app = () => (
  <div className="wraper">
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <DAppProvider config={dAppConfig}>
        <ApolloProvider client={apolloClient}>
          <Header />
          <PosedRouter>
            <ScrollTop path="/">
              <Home exact path="/">
                <Redirect to="/Home" />
              </Home>
              <Explore path="/Explore" />
              <ItemDetail path="/token/:id" />
              <Author path="/Author" />
              <Wallet path="/Wallet" />
              <Activity path="/Activity" />
            </ScrollTop>
          </PosedRouter>
          <ScrollToTopBtn />
        </ApolloProvider>
      </DAppProvider>
    </QueryClientProvider>
  </div>
);
export default app;
