import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

// npm install axios --save

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

function App() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        client.get('/1').then((response) => {
            setPost(response.data);
        });
    }, []);

    function createPost() {
        client.post('/', {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    return post ? (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    ) : (
        <div></div>
    )
}

export default App;
