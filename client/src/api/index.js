import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5001",
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
    }

    return req;
})

export const fetchPosts = () => {
    return API.get("/posts");
}

export const createPosts = (newPosts) => {
    return API.post("/posts", newPosts);
}

export const updatePosts = (id, updatedPost) => {
    return API.patch(`/posts/${id}`, updatedPost);
}

export const deletePosts = (id) => {
    return API.delete(`/posts/${id}`);
}

export const likePosts = (id) => {
    return API.patch(`/posts/${id}/likePost`)
}

export const signIn = (formData) => {
    return API.post("/users/signin", formData);    
}

export const signUp = (formData) => {
    return API.post("/users/signup", formData);    
}

 