import React, { Component } from 'react'
import axios from "axios"
import Like from "./images/likeLogo.png"
import Comment from "./images/commentLogo.png"
export default class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })

            })

    }



    render() {
        localStorage.setItem("picurl", "https://i.pinimg.com/736x/62/2f/9d/622f9d0cfaf3bdd69fba4046103363e2.jpg")
        localStorage.setItem("name", "Harinder")
        const { posts } = this.state
        const ListofPosts = posts.length ? (
                posts.map(val => {
                    return ( <
                        div className = "post" >
                        <
                        img src = { localStorage.getItem("picurl") }
                        alt = "NP"
                        id = "post-image" / >
                        <
                        p id = "post-by" > { val.userId } < /p> <
                        p id = "post-content" > { val.title } < /p> <
                        hr / >
                        <
                        ul className = "like-commentbtn" >
                        <
                        li > < a href = "/" > < img src = { Like }
                        alt = "Like"
                        className = "Like-btn" / > Like < /a></li >
                        <
                        li > < a href = "/" > < img src = { Comment }
                        alt = "Like"
                        className = "Comment-btn" / > Comment < /a></li >
                        <
                        /ul> <
                        hr / >
                        <
                        input type = "text"
                        id = "comment-box"
                        placeholder = "Comment here" / >
                        <
                        button id = "comment-btn"
                        className = "right" > Comment < /button>


                        <
                        /div>
                    )
                })
            ) :
            ( <
                div className = "center" > No Post Available at Momemt < /div>

            )

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
            /div> { ListofPosts } <
            />

        )
    }
}