import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";
import * as api from "../api";



// action creators = functions that return actions
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createPosts = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPosts(post);
		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updatePosts = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePosts(id, post);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletePosts = (id) => async (dispatch) => {
	try {
		await api.deletePosts(id);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likePosts = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePosts(id);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};
