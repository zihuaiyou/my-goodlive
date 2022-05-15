import { COLLECT, UNCOLLECT } from "../constants";

const initState = []


const collect = (preState = initState, action) => {
    const { type, collect } = action
    switch (type) {
        case COLLECT:
            return [...preState, collect]
        case UNCOLLECT:
            let currentIndex = preState.findIndex(item => item === collect);
            return [...preState.slice(0, currentIndex), ...preState.slice(currentIndex + 1)]
        default:
            return preState;
    }
}

export default collect