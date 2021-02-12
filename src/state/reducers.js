import { ADD_NEW_POST, UPDATE_WITH_DATA_FROM_DB, REMOVE_DATA_FROM_STORE, UPDATE_EDITED_POST_IN_STORE } from './actions';

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

        case UPDATE_WITH_DATA_FROM_DB:
            return {
                ...state,
                blogPosts: [
                    ...action.payload
                ]
            }

        case REMOVE_DATA_FROM_STORE:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts.filter(el => el._id != action.payload)
                ]
            } 
            
        case UPDATE_EDITED_POST_IN_STORE:
            return {
                ...state,
                blogPosts: [
                    ...state.blogPosts.map(el => {
                        if (el._id === action.payload._id) {
                            return action.payload
                        } else {
                            return el
                        }
                    }) 
                ]
            }       
            
        default:
            return state
    }
}