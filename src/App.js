import React, { Component } from 'react'
import Header from "./components/Header.js"
import Logo from "./components/images/logo.PNG"

import MainPageBeforeLogin from "./components/MainPageBeforeLogin"
export default class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            Header image = { Logo }
            /> <
            MainPageBeforeLogin / >
            <
            /div>
        )
    }
}