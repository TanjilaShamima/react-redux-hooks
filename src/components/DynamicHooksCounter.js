'use client';
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/counter/counterActionTypes";
import { dDecrement, dIncrement, decrement, increment } from "../redux/counter/counterActions";
import { dynamicDecrementAction, dynamicIncrementAction } from "../redux/dynamicCounter/dynamicAction";

function DynamicHooksCounter({incrementValue, decrementValue}) {
    const count = useSelector(state => state.dynamicCounter.count)
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(dynamicIncrementAction(value));
    }

    const decrementHandler = (value) => {
        dispatch(dynamicDecrementAction(value));
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <p className="font-bold text-[18px]">Dynamic Increment</p>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>incrementHandler(incrementValue)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>decrementHandler(decrementValue)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default DynamicHooksCounter;
