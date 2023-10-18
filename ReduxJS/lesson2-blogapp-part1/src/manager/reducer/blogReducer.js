

export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_BLOG':
            return "hello";


        default:
            return 'this is default';
    }
}