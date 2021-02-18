import { all } from 'redux-saga/effects';
import { watchFetchBlogPosts, watchFetchSelectedBlogPosts, watchAddBlogPost, watchRemoveBlogPost, watchEditBlogPost } from './blogPostsSaga';

export default function* MainSaga(){
    yield all([
        watchFetchSelectedBlogPosts(),
        watchFetchBlogPosts(),
        watchAddBlogPost(),
        watchRemoveBlogPost(),
        watchEditBlogPost()
        ]
    )
}