import React from "react";
import CoverPic from "./images/cover-pic.jpg"
import ProfilePic from "./images/profile-img.jpg"
const Profile = () => {
    return ( <
        div id = "profile" >
        <
        div className = "profile" >
        <
        img src = { CoverPic }
        id = "cover-pic" / >
        <
        img src = { ProfilePic }
        id = "profile-pic" / >
        <
        /div>

        <
        h2 > Harinder Singh < /h2> <
        p > Biography Here < /p> <
        nav >
        <
        ul className = "nav-profile" >
        <
        li > < a > About < /a></li >
        <
        li > < a > Posts < /a></li >
        <
        li > < a > Friends < /a></li >
        <
        li > < a > Photos < /a></li >


        <
        /ul> <
        /nav> <
        /div>
    );
};
export default Profile;