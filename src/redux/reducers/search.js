import {UPDATE_SEARCH_INPUT} from '../constants';

const initState = {
    searchTerm:""
}
const search = (preState = initState,action) => {
    const {type,searchTerm} = action;
    switch (type) {
        case UPDATE_SEARCH_INPUT:
            return {
                searchTerm
            }
    
        default:
            return preState;
    }
}

export default search