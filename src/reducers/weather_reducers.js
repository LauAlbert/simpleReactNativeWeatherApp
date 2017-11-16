import {
    FETCH_TODAY,
    FETCH_FIVE
} from '../actions/types';

const INITIAL_STATE = {selectedDay:{}, todayInfo:{}, fiveInfo:[]};

export default(state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_TODAY:
            return {...state, selectedDay: action.payload, todayInfo: action.payload}
        case FETCH_FIVE:
        default:
            return state;
    }
}