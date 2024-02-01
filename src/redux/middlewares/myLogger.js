import rootReducer from "../rootReducer";

export const myLogger = (store) => (next) => (action) => {
    console.log("My action is: ", JSON.stringify(action));
    console.log("My state before is: ", JSON.stringify(store.getState()));

    const upcomingState = [action].reduce(rootReducer, store.getState()); // need to know how to use reduce() method

    console.log("My state after is: ", JSON.stringify(upcomingState));

    next(action);
}