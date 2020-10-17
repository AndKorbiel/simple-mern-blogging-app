export const ADD_NEW_POST = 'ADD_NEW_POST';

export function addNewPost(newPost) {
    return {
        type: ADD_NEW_POST,
        payload: newPost
    }
}