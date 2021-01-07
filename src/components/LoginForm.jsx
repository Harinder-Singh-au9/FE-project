import React, { Component } from "react";
import "./css/loginform.css";

export default class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    };

    render() {
        return ( <
            div class = "login-form" >
            <
            form >
            <
            input id = "username"
            placeholder = "Email address or phone number"
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            input id = "password"
            placeholder = "Password"
            onChange = { this.handleChange }
            />{" "} <
            br / >
            <
            button id = "login-btn" > Log In < /button> <br / >
            <
            a href = "#" > Forgotten password ? < /a> <br / >
            <
            hr / >
            <
            br / >
            <
            button id = "signup-btn" > Create New Account < /button> <
            /form> <
            /div>
        );
    }
}