import { useState } from "react";
import Counter from './Counter'
import styled from './CounterBox.module.css'

export default function CounterBox() {
    const [total, setTotal] = useState<number>(0);
    
    const handlePlus = () => {
        setTotal(prev => prev + 1);
    }

    const handleMinus = () => {
        setTotal(prev => prev - 1);
    }
    
    return (
        <>
            <div id={styled.counterBox}>
                <Counter onMinus={handleMinus} onPlus={handlePlus}></Counter>
                <Counter onMinus={handleMinus} onPlus={handlePlus}></Counter>
            </div>
            <div className={styled.total}> Total : {total}</div>
        </>
    )
}