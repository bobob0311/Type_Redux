import { useState } from "react";
import Counter from './Counter'
import styled from './CounterBox.module.css'

export default function CounterBox() {
    const [total, setTotal] = useState<number>(0);
    
    const handleTotal = () => {
        setTotal(prev => prev + 1);
    }
    
    return (
        <>
            <div id={styled.counterBox}>
                <Counter onPlus={handleTotal}></Counter>
                <Counter onPlus={handleTotal}></Counter>
            </div>
            <div className={styled.total}> Total : {total}</div>
        </>
    )
}