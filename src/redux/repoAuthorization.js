const SET_REP = "SET_REP";



const initialState = {
    items: []
}

export default function repoAuthorization(state = initialState, action) {
    switch(action.type) {
        case SET_REP:
            return { ...state, items: action.payload} 
      
        default: return state;
    }
}

export const setRepo = (repo) => ({type: SET_REP, payload: repo})
