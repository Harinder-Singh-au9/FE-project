import React from "react";
import Logo from "./images/logo.PNG";
import { Link, NavLink } from "react-router-dom"
import image from "./images/profile-img.jpg";
import homeLogo from "./images/home.png"
import signoutLogo from "./images/signout.png"
import Home from "./Home.js"
import Profile from "./profile"

const Navbar = () => {
    localStorage.setItem("id", "Harinder")
    return ( <
        >
        <
        nav className = "nav-wrapper indigo darken-4" >
        <
        div className = "nav" >
        <
        a href = "/" > < img src = { Logo }
        alt = "Not Found"
        id = "logo-img" / > < /a> <
        input id = "searchbar"
        placeholder = "Seach WeShare" / >
        <
        ul className = "right" >

        <
        li > < NavLink href = "/profile" > < img src = { image }
        id = "profile-small-img"
        alt = "loading issue" / > { localStorage.getItem("id") } < /NavLink></li >
        <
        li > < a href = "/" > < img src = { homeLogo }
        id = "home-logo"
        alt = "Home" / > < /a></li >
        <
        li > < a href = "/main" > < img src = { signoutLogo }
        alt = "Signout"
        id = "signout-logo" / > < /a></li >


        <
        /ul> <
        /div> <
        /nav> <
        />
    )
};
export default Navbar