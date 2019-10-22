const loginReducer = (state, action) => {
    switch(action.type) {
        case 'IS_LOGIN':
            return true;
        default:
            return false;
    }
}

export default loginReducer;