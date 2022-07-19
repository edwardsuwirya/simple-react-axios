import axios from "axios";

const clientInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export default clientInstance;
