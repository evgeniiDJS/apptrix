const SET_USER = "SET_USER";

const initialState = {
    items: []
};

export default function repoUsers(state = initialState, action) {
    switch(action.type) {
        case SET_USER: 
            return { ...state, items: action.payload}

        default: return state
    }
}

export const setUsers = (users) => ({type: SET_USER, payload: users})