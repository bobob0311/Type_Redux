import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    totalCount: number,
    totalPrice: number,
    items: item[]
}

interface item{
    id:number,
    count: number,
    price: number,
    name: string,
}

interface simple{
    id: number,
    price: number,
}

const initialState: CounterState = {
    items:[],
    totalCount: 0,
    totalPrice: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
        increment: (state, action: PayloadAction<simple>) => {
            const { price, id } = action.payload;
            const now = findSelectedItem(id, state.items);
            
            state.totalCount += 1;
            state.totalPrice += price;

            if (now) {
                now.count += 1;
            }
        },

        decrement: (state,action:PayloadAction<simple>) => {
            const { price, id } = action.payload;
            const now = findSelectedItem(id, state.items);
            


            if (now) {
                if (now.count > 0) {
                    now.count -= 1;
                    state.totalCount -= 1;
                    state.totalPrice -= price;
                } else {
                    const index = state.items.findIndex(item => item.id === id);
                    if (index !== -1) {
                        state.items.splice(index, 1); // 해당 아이템을 삭제
                    }
                }
            }
        },

        incrementByAmount: (state, action: PayloadAction<item>) => {
            const { id, price, count, name } = action.payload;

            state.totalCount += count;
            state.totalPrice += count * price;
            
            const now = findSelectedItem(id, state.items);    

            if (!now) {
                state.items.push({
                    id: action.payload.id,
                    count: count,
                    price: price,
                    name: name,
                })
            } else {
                now.count += count;
            }
        }
    }
})

function findSelectedItem(id: number, items: item[]) {
    return items.find(item => item.id === id);
}

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer