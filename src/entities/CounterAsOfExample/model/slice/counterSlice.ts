import {createSlice} from "@reduxjs/toolkit";
import {CounterSchema} from "entities/CounterAsOfExample/model/types/counterSchema";

const counterInitialState: CounterSchema = {
    value: 0
}
export const counterSlice = createSlice(({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
}))

export const { actions: counterActions  } = counterSlice
export const { reducer: counterReducer  } = counterSlice

