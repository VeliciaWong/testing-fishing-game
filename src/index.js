import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home'
import Explore from './pages/Explore/Explore';
import Itemdetails from './pages/Itemdetails/Itemdetails';
// import App from './App';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/itemdetails" element={<Itemdetails/>}/>
    </Routes>
  </BrowserRouter>,

  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
