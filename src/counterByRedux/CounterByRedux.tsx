import { decrement,increment } from "./counterSlice";
import { useCounterDispatch, useCounterSelector } from "../hooks";

export function CounterByRedux() {
    const count = useCounterSelector(state => state.counter);
    const { items, totalCount, totalPrice } = count;
    const dispatch = useCounterDispatch()

    return (
    <>
    { items.map(item => <div> {item.price}</div>) }
        </>  
        )
        {/* 
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    +
                </button>
                <div>{totalCount}</div>
                <div>{totalPrice}</div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
        </div>
        */}
    
}