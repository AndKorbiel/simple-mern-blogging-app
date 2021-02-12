export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_WITH_DATA_FROM_DB = 'UPDATE_WITH_DATA_FROM_DB';
export const REMOVE_DATA_FROM_STORE = 'REMOVE_DATA_FROM_STORE';
export const UPDATE_EDITED_POST_IN_STORE = 'UPDATE_EDITED_POST_IN_STORE';

export function addNewPost(newPost) {
    return {
        type: ADD_NEW_POST,
        payload: newPost
    }
}

export function updateWithDataFromDb(posts) {
    return {
        type: UPDATE_WITH_DATA_FROM_DB,
        payload: posts
    }
}

export function removeDataFromStore(post) {
    return {
        type: REMOVE_DATA_FROM_STORE,
        payload: post
    }
}

export function updateEditedPostInStore(post) {
    return {
        type: UPDATE_EDITED_POST_IN_STORE,
        payload: post
    }
}