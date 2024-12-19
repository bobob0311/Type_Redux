import { useCounterSelector } from "../hooks";
import CounterByRedux from "./CounterByRedux";
import styled from "./CounterBoxByRedux.module.css"

export function CounterBoxByRedux() {
    const count = useCounterSelector(state => state.counter);
    const { items, totalCount, totalPrice } = count;

    return (
        <div className={styled.page}>
            <div className={styled.container}>
                {items.map(item => <CounterByRedux key={item.id} data={item} />)}
            </div>
            <div>{totalCount}</div>
            <div>{totalPrice}</div>
        </div>  
    )
        
    
}


