import { useState } from "react";
import Counter from './Counter'
import styled from './CounterBox.module.css'

export default function CounterBox() {
    const [total, setTotal] = useState<number>(0);
    const [counter, setCounter] = useState<JSX.Element[]>([]);
    
    const handlePlus = () => {
        setTotal(prev => prev + 1);
    }

    const handleMinus = () => {
        setTotal(prev => prev - 1);
    }

    const handleAddCount = () => {
        setCounter(prevCounters => [
            ...prevCounters,
            <Counter key={prevCounters.length} onMinus={handleMinus} onPlus={handlePlus}></Counter>
        ])
    }


    
    return (
        <>
            <button onClick={handleAddCount}>카운터 추가하기</button>
            <div id={styled.counterBox}>
                {counter}
                <Counter onMinus={handleMinus} onPlus={handlePlus}></Counter>
                <Counter onMinus={handleMinus} onPlus={handlePlus}></Counter>
            </div>
            <div className={styled.total}> Total : {total}</div>
        </>
    )
}