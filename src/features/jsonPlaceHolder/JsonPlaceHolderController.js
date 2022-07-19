import {useDeps} from "../../shared/depContext";
import {useEffect, useState} from "react";

const JsonPlaceHolderController = () => {
    const {apiClient} = useDeps();
    const {doGet, doPost} = apiClient()
    const [viewState, setViewState] = useState({isLoading: false, data: null, error: null})

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setViewState({isLoading: true, data: null, error: null})
        try {
            const response = await doGet({url: '/1'});
            setViewState({isLoading: false, data: response, error: null})
        } catch (e) {
            setViewState({isLoading: false, data: null, error: e})
        }
    }
    const createPost = async () => {
        setViewState({isLoading: true, data: null, error: null})
        try {
            const response = await doPost({
                url: '/', data: {
                    title: "Hello World!",
                    body: "This is a new post."
                }
            })
            setViewState({isLoading: false, data: response, error: null})
        } catch (e) {
            setViewState({isLoading: false, data: null, error: e})
        }
    }
    const onCreatePost = () => {
        createPost();
    }
    return {
        viewState, onCreatePost
    }
}

export default JsonPlaceHolderController;
