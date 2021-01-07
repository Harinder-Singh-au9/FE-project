import React from 'react';
import "./css/header.css"

const Header = (props) => {
    return ( <
        div className = "header" >
        <
        img className = "logo"
        src = { props.image }
        alt = "loding issue" / >
        <
        /div>
    )

}

export default Header;