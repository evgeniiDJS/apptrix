const SET_TIME = "SET_TIME";

const initialState = {
    items: []
};

export default function repoTimesheets(state = initialState, action) {
    switch(action.type) {
        case SET_TIME: 
            return { ...state, items: action.payload}

        default: return state
    }
}

export const setTime = (time) => ({type: SET_TIME, payload: time})