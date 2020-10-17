import { addInitialData } from './actions';

export const getAllBlogPostsEffect = () => {
    return dispatch => {
        fetch('/blog-post/getAll')
        .then(res => res.json())
        .then(data => {
            dispatch(addInitialData(data.blogPosts))
        })
        .catch(err => console.log(err))
    }
}