export let data = {
    users: [],
}

export function reducer(state, action) {
    switch (action.type) {
        case "SIGN_IN_USER": {
            return {
                ...state,
                users: action.payload
            }
        }
        
        default:
            return state;

    }
}