const { INCREMENT, DECREMENT } = require("./counterActionTypes")

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}