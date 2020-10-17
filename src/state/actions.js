export const ADD_NEW_POST = 'ADD_NEW_POST';
export const ADD_INITIAL_DATA = 'ADD_INITIAL_DATA';

export function addNewPost(newPost) {
    return {
        type: ADD_NEW_POST,
        payload: newPost
    }
}

export function addInitialData(posts) {
    return {
        type: ADD_INITIAL_DATA,
        payload: posts
    }
}