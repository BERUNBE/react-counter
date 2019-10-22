const counterReducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'DOUBLE':
            return state * 2;
        case 'HALVE':
            return state / 2;
        case 'RESET':
            return 0;
        default:
            return 0;
    }
}

export default counterReducer;