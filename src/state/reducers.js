import { ADD_NEW_POST } from './actions';

const initialState = {
    blogPosts: [
        {
            title: "First post title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem. Aliquam pellentesque tristique sem, eget pretium neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            date: "2020-10-15",
            category: "#technology",
            likes: 10
        },
        {
            title: "Second post title",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pellentesque leo a commodo. Proin quis iaculis velit, id porta sem.",
            date: "2001-01-11",
            category: "#foo-bar",
            likes: 1000
        }
    ]
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
        default:
            return state
    }
}