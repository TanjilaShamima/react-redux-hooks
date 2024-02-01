import { D_DECREMENT, D_INCREMENT } from "./dynamicActionTyps";

const initialState = {
    count: 0
}

const dynamicReducer = (state = initialState, action) => {
    switch (action.type) {
        case D_INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case D_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export default dynamicReducer;