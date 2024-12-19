import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    totalCount: number,
    totalPrice: number
}

interface incrementByAmount {
    amount: number,
    price: number
}

const initialState: CounterState = {
    totalCount: 0,
    totalPrice: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state  => { state.totalCount += 1 },
        decrement: state  => { state.totalCount -= 1 },
        incrementByAmount: (state, action:PayloadAction<incrementByAmount>) => {
            state.totalPrice += action.payload.amount;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer