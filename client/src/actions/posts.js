import * as api from "../api";

// action creators = functions that return actions
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
        console.log(error.message);
    }
};

export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
        dispatch({ type: "CREATE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePosts = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePosts(id, post);
        dispatch({ type: "UPDATE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
