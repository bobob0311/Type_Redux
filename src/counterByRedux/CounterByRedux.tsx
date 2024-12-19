import { useCounterDispatch } from "../hooks";
import { decrement, increment } from "./counterSlice";

interface CounterBoxByReduxState {
    data : item
}

type item = {
    id: number,
    count: number,
    price: number,
    name: string
}

export default function CounterByRedux(props:CounterBoxByReduxState) {
    const { data } = props;
    const { name, count, price, id } = data;
    const dispatch = useCounterDispatch();

    return (
        <div>
            <div>상품 명 : {name}</div>
            <div>상품 개수 : {count}</div>
            <div>상품 가격 : {price}</div>
            <div>상품 총가격 : {price * count} </div>
            <button onClick={() => dispatch(increment({id:id, price:price}))}>+</button>
            <button onClick={() => dispatch(decrement({ id: id, price: price }))}>-</button>
        </div>
    )
}