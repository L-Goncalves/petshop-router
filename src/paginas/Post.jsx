import React, { useEffect, useState } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { search } from '../api/api';
import '../assets/css/post.css'
const Post = () => {
    let history = useHistory()
    // Use params returns an object
    const data = useParams()
    // Updates the view
    const [post, setPost] = useState({});
    // Fetches DATA
    useEffect(()=>{
        
        search(`/posts/${data.id}`, setPost)
        .catch( () =>{
            history.push('/DoesntExist')
        })
    }, [data])
    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="carta__texto">
                    {post.body}
                </p>
            </article>
        </main>
    )


}

export default Post;