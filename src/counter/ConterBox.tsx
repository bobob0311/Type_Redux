import { useState } from "react";
import Counter from './Counter'
import styled from './CounterBox.module.css'

type data = {
  id: number;
  name: string;
  price: number;
  buy: boolean;
}


type propsState = {
    data: data[],
}


export default function CounterBox(props:propsState) {
    const { data } = props;
    const [total, setTotal] = useState<number>(0);
    console.log(data);
    const handlePlus = () => {
        setTotal(prev => prev + 1);
    }

    const handleMinus = () => {
        setTotal(prev => prev - 1);
    }



    
    return (
        <>
            <div id={styled.counterBox}>
                {data.map(item => <Counter key={item.id} data={item} onMinus={handleMinus} onPlus={handlePlus}></Counter>)}
            </div>
            <div className={styled.total}> Total : {total}</div>
        </>
    )
}