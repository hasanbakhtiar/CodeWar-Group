

const initialState = [];



export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_BLOG":
            return [...state,action.blog];

        case "EDIT_BLOG":
            return 'edit';

        case "REMOVE_BLOG":
            return 'remove'
    }
}