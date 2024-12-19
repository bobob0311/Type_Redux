import { decrement,increment } from "./counterSlice";
import { useCounterDispatch, useCounterSelector } from "../hooks";

export function CounterByRedux() {
    const count = useCounterSelector(state => state.counter);
    const dispatch = useCounterDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    +
                </button>
                <span>{count.totalCount}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>
                    -
                </button>
            </div>
        </div>
    )
}