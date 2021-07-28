import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => {
    return axios.get(url);
}

export const createPosts = (newPosts) => {
    return axios.post(url, newPosts);
}

export const updatePosts = (id, updatedPost) => {
    return axios.patch(`${url}/${id}`, updatedPost);
}

 