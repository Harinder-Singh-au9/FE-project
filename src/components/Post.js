import React from 'react';

const Post = () => {
    return ( <
        >
        <
        div className = "post-by-user" >
        <
        img src = { localStorage.getItem("picurl") }
        alt = "NP"
        id = "post-image" / >
        <
        input type = "text"
        id = "comment-box"
        placeholder = "Whats in your mind" / >
        <
        button > Post < /button> <
        /div> <
        />
    )
}

export default Post;