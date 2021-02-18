export const ADD_NEW_POST_REQUEST = 'ADD_NEW_POST_REQUEST';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_WITH_DATA_FROM_DB_REQUEST = 'UPDATE_WITH_DATA_FROM_DB_REQUEST';
export const UPDATE_WITH_SELECTED_DATA_FROM_DB_REQUEST = 'UPDATE_WITH_SELECTED_DATA_FROM_DB_REQUEST';
export const UPDATE_WITH_DATA_FROM_DB = 'UPDATE_WITH_DATA_FROM_DB';
export const REMOVE_DATA_FROM_STORE_REQUEST = 'REMOVE_DATA_FROM_STORE_REQUEST';
export const REMOVE_DATA_FROM_STORE = 'REMOVE_DATA_FROM_STORE';
export const UPDATE_EDITED_POST_IN_STORE_REQUEST = 'UPDATE_EDITED_POST_IN_STORE_REQUEST';
export const UPDATE_EDITED_POST_IN_STORE = 'UPDATE_EDITED_POST_IN_STORE';

export function addNewPostRequest(newPost) {
    return {
        type: ADD_NEW_POST_REQUEST,
        newPost
    }
}

export function addNewPost(newPost) {
    return {
        type: ADD_NEW_POST,
        payload: newPost
    }
}

export function updateWithDataFromDbRequest() {
    return {
        type: UPDATE_WITH_DATA_FROM_DB_REQUEST
    }
}

export function updateWithSelectedDataFromDbRequest(keyword) {
    return {
        type: UPDATE_WITH_SELECTED_DATA_FROM_DB_REQUEST,
        keyword
    }
}

export function updateWithDataFromDb(posts) {
    return {
        type: UPDATE_WITH_DATA_FROM_DB,
        payload: posts
    }
}

export function removeDataFromStoreRequest(id) {
    return {
        type: REMOVE_DATA_FROM_STORE_REQUEST,
        id
    }
}

export function removeDataFromStore(post) {
    return {
        type: REMOVE_DATA_FROM_STORE,
        payload: post
    }
}

export function updateEditedPostInStoreRequest(editedPost) {
    return {
        type: UPDATE_EDITED_POST_IN_STORE_REQUEST,
        editedPost
    }
}

export function updateEditedPostInStore(post) {
    return {
        type: UPDATE_EDITED_POST_IN_STORE,
        payload: post
    }
}