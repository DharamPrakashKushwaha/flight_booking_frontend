const initialState = [];
const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_TODO":
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter((todo, index) => index !== action.payload)
        default:
            return state;
    }
}

export default toDoReducer;