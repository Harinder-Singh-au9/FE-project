import React, { Component } from "react";
import Navbar from "./components/Navbar.js"
import "./components/css/main.css"
import Home from "./components/Home.js"
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/profile.js"
// import MainPageBeforeLogin from "./components/MainPageBeforeLogin";
export default class App extends Component {
    render() {
        return ( <
            BrowserRouter >
            <
            div className = "App" >

            <
            Navbar / >
            <
            Route exact path = "/"
            component = { Home }
            /> <
            Route path = "/profile"
            component = { Profile }
            /> <
            /div> <
            /BrowserRouter>
        );
    }
}