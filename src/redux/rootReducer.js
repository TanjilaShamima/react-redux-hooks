const { combineReducers } = require("redux");
const { default: counterReducer } = require("./counter/counterReducer");
const { default: dynamicReducer } = require("./dynamicCounter/dynamicReducer");

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicReducer
})

export default rootReducer;