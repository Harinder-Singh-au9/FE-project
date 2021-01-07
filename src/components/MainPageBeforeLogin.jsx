import React from 'react'
import LoginForm from "./LoginForm"
import "./css/MainPageBeforeLogin.css"
import MainPageLogo from "./images/mainpagelogo.png"

const MainPageBeforeLogin = () => {
    return ( <
        div id = "bc-image" >
        <
        div className = "MainPage" >
        <
        img src = { MainPageLogo }
        /> <
        LoginForm / >
        <
        /div> <
        /div>
    )
}
export default MainPageBeforeLogin;