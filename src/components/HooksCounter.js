'use client';
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/counter/counterActionTypes";
import { decrement, increment } from "../redux/counter/counterActions";

function HooksCounter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <p className="font-bold text-[18px]">Static Increment - Increment by 1</p>
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default HooksCounter;
