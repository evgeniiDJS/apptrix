const SET_TASK = "SET_TASK";

const initialState = {
    items: []
};

export default function repoTask(state = initialState, action) {
    switch(action.type) {
        case SET_TASK: 
            return { ...state, items: action.payload}

        default: return state
    }
}

export const setTask = (task) => ({type: SET_TASK, payload: task})