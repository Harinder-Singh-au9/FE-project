import React from "react";
import LoginForm from "./LoginForm";
import "./css/MainPageBeforeLogin.css";
import MainPageLogo from "./images/mainpagelogo.png";
import Navbar from "./Navbar.js";

const MainPageBeforeLogin = () => {
    return ( <
        div id = "
        " >
        { " " } <
        div className = "MainPage" >
        <
        img src = { MainPageLogo }
        /> <Navbar / >
        <
        LoginForm / >
        <
        /div>{" "} <
        /div>
    );
};
export default MainPageBeforeLogin;