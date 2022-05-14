import { SET_LOGIN, OUT_LOGIN } from "../constants";

const initState = {
    user: {
        token: "",
        nickName: ""
    }
}

const login = (preState = initState, action) => {
    const { type, user } = action;
    switch (type) {
        case SET_LOGIN:
            return {
                user
            }
        case OUT_LOGIN:
            return preState;
        default:
            return preState;
    }
}
export default login