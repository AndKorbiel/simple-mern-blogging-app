import { ADD_NEW_POST, ADD_INITIAL_DATA } from './actions';

const initialState = {
    blogPosts: []
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts,
                    action.payload
                ]
            }

        case ADD_INITIAL_DATA:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts,
                    ...action.payload
                   ]
            }
            
        default:
            return state
    }
}