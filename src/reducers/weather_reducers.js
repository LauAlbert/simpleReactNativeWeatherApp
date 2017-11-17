import {
    FETCH_TODAY,
    FETCH_FIVE,
    SWITCH_LIST,
    SELECT_DAY
} from '../actions/types';

const INITIAL_STATE = {city: "", selectedDay:{}, todayInfo:[], fiveInfo:[], currentList: "today", focusList: []};

export default(state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_TODAY:
            return {...state, city: action.payload.name, selectedDay: action.payload, todayInfo: [action.payload], focusList: [action.payload]}
        case FETCH_FIVE:
            return {...state, fiveInfo: action.payload}
        case SWITCH_LIST:
            if (action.payload === "today") {
                return {...state, selectedDay: state.todayInfo[0], currentList: action.payload, focusList: state.todayInfo}
            } else {
                return {...state, selectedDay: state.fiveInfo[0], currentList: action.payload, focusList: state.fiveInfo}
            }
        case SELECT_DAY: {
            return {...state, selectedDay: state.focusList[action.payload]};
        }
        default:
            return state;
    }
}