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
            
            if (now) {
                changeTotal(state, 1, price);
                now.count += 1;
            }
        },

        decrement: (state,action:PayloadAction<simple>) => {
            const { price, id } = action.payload;
            const now = findSelectedItem(id, state.items);
            
            if (now) {
                if (now.count > 0) {
                    now.count -= 1;
                    changeTotal(state, -1, price);
                } else {
                    deleteItemById(state.items, id);
                }
            }
        },

        incrementByAmount: (state, action: PayloadAction<item>) => {
            const { id, price, count, name } = action.payload;
            const now = findSelectedItem(id, state.items);
            
            if (now) {
                now.count += count;
            } else {
                state.items.push({
                    id: action.payload.id,
                    count: count,
                    price: price,
                    name: name,
                })
            }
            changeTotal(state, count, price);
        },

        deleteItem: (state, action: PayloadAction<number>) => {
            const id = action.payload;
    
            const deletedValue = deleteItemById(state.items, id);
            if (deletedValue) {
                state.totalCount -= deletedValue.count;
                state.totalPrice -= deletedValue.count * deletedValue.price;
            }
        }
    }
})

function findSelectedItem(id: number, items: item[]): item|undefined {
    return items.find(item => item.id === id);
}

function changeTotal(state:CounterState, amount:number, price:number) {
    state.totalCount += amount;
    state.totalPrice += amount * price;
}

function deleteItemById(arr:item[], id:number): item|undefined {
    const index = arr.findIndex(item => item.id === id);
    const value = arr[index];
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return value;
}

export const { increment, decrement, incrementByAmount, deleteItem} = counterSlice.actions

export default counterSlice.reducer