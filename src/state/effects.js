import { updateWithDataFromDb, addNewPost, removeDataFromStore, updateEditedPostInStore } from './actions';

export const getAllBlogPostsEffect = () => {
    return dispatch => {
        fetch('/blog-post/getAll')
        .then(res => res.json())
        .then(data => {
            dispatch(updateWithDataFromDb(data))
        })
        .catch(err => console.log(err))
    }
}

export const getSelectedBlogPostsEffect = keyword => {
    return dispatch => {
        fetch('/blog-post/get?' + new URLSearchParams({
            keyword: keyword
        }))
        .then(res => res.json())
        .then(data => {
            dispatch(updateWithDataFromDb(data))
        })
        .catch(err => console.log(err))
    }
}

export const addNewPostEffect = newPost => {
    return dispatch => {
        fetch('/blog-post/add', {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            dispatch(addNewPost(data))
        })
        .catch(err => console.log(err))
    }
}

export const removePostEffect = id => {
    return dispatch => {
        fetch('/blog-post/delete?' + new URLSearchParams({
            id: id
        }))
        .then(res => res.json())
        .then(data => {
            dispatch(removeDataFromStore(data))
        })
        .catch(err => console.log(err))
    }
}

export const eidtPostEffect = editedPost => {
    return dispatch => {
        fetch('/blog-post/update', {
            method: "PUT",
            body: JSON.stringify(editedPost),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(res => res.json())
        .then(data => {
            dispatch(updateEditedPostInStore(data))
        })
        .catch(err => console.log(err))
    }
}