import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home'
// import Explore from './pages/Explore/Explore';
// import Itemdetails from './pages/Itemdetails/Itemdetails';
// import App from './App';
import {
  Routes,
  Route,
  HashRouter,
  //  BrowserRouter
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      {/* <Route parh="/explore" element={<Explore/>}/>
      <Route path="/item-details" element={<Itemdetails/>}/> */}
    </Routes>
  </HashRouter>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
