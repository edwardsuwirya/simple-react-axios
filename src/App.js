import './App.css';
import {useEffect, useState} from "react";
import {useDeps} from "./shared/depContext";

// npm install axios --save

function App() {
    const {apiClient} = useDeps();
    const {doGet, doPost} = apiClient()
    const [post, setPost] = useState(null);


    useEffect(() => {
        const getPost = async () => {
            const response = await doGet({url: '/1'});
            setPost(response);
        };
        getPost();
    }, []);

    const createPost = async () => {
        const response = await doPost({
            url: '/', body: {
                title: "Hello World!",
                body: "This is a new post."
            }
        })
        setPost(response);
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
