import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostComponent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8080/api/posts');
        setPosts(response.data);
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    {post.reviews.map(review => (
                        <div key={review.id}>
                            <h4>{review.author}</h4>
                            <p>Rating: {review.rating}</p>
                            <p>{review.content}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default PostComponent;