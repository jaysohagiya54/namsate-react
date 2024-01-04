import React from "react";
import  ReactDOM  from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import CDN_URL from "./utils/constants";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";


const heading = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"helo wasup 1"),React.createElement("h2",{},"helo  1")]),
React.createElement("div",{id:"child"},[React.createElement("h1",{},"helo wasup 2"),React.createElement("h2",{},"helo  2")])]);
const root  = ReactDOM.createRoot(document.getElementById("root"));


const Applayout = () => { //functional comp - a js function which return jsx element.
  return (
    <div style={{backgroundColor:"#efefec"}}>
      <Header/>
      <Outlet/>
    </div>
  );
};
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout/>,
    children:[{
      path: '/',
      element: <Body/>
     },{
      path: '/about',
      element: <About/>
     },
     {
      path: '/contact',
      element: <Contact/>
     },
     {
      path: '/restaurants/:resId',
      element: <Restaurantmenu/>
     }],
    errorElement: <Error/>
   }, 
  
 ]);



root.render(<RouterProvider router={router}/>);
 