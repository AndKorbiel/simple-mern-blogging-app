import { takeLatest, put } from 'redux-saga/effects';

function* asyncFetchPostsRequest() {
    const res = yield fetch('/blog-post/getAll')
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    yield put({type: 'UPDATE_WITH_DATA_FROM_DB', payload: res })
}

function* asyncFetchSelectedPostsRequest(payload) {
    const keyword = payload.keyword;

    const res = yield fetch('/blog-post/get?' + new URLSearchParams({
        keyword: keyword
    }))
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
    yield put({type: 'UPDATE_WITH_DATA_FROM_DB', payload: res})
}

function* asyncAddBlogPostRequest(payload) {
    const newPost = payload.newPost;

    const res = yield fetch('/blog-post/add', {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
    yield put({type: 'ADD_NEW_POST', payload: res})
}

function* asyncRemoveBlogPostRequest(payload) {
    const id = payload.id;

    const res = yield fetch('/blog-post/delete?' + new URLSearchParams({
        id: id
    }))
        .then(res => res.json())
        .catch(err => console.log(err))
    yield put({type: 'REMOVE_DATA_FROM_STORE', payload: res})
}

function* asyncEditBlogPostRequest(payload) {
    const editedPost = payload.editedPost;

    const res = yield fetch('/blog-post/update', {
        method: "PUT",
        body: JSON.stringify(editedPost),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
    yield put({type: 'UPDATE_EDITED_POST_IN_STORE', payload: res})
}

export function* watchFetchBlogPosts() {
    yield takeLatest('UPDATE_WITH_DATA_FROM_DB_REQUEST', asyncFetchPostsRequest)
}

export function* watchFetchSelectedBlogPosts() {
    yield takeLatest('UPDATE_WITH_SELECTED_DATA_FROM_DB_REQUEST', asyncFetchSelectedPostsRequest)
}

export function* watchAddBlogPost() {
    yield takeLatest('ADD_NEW_POST_REQUEST', asyncAddBlogPostRequest)
}

export function* watchRemoveBlogPost() {
    yield takeLatest('REMOVE_DATA_FROM_STORE_REQUEST', asyncRemoveBlogPostRequest)
}

export function* watchEditBlogPost() {
    yield takeLatest('UPDATE_EDITED_POST_IN_STORE_REQUEST', asyncEditBlogPostRequest)
}