import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value : 0
}
export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        addCounter : (state) => {
            state.value += 1;
        },
        subCounter : (state) => {
            state.value -= 1;
        }
    }
})

export const { addCounter, subCounter} = CounterSlice.actions;
export default CounterSlice.reducer;
