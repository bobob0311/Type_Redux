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
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const handlePlus = (id:number) => {
        const selectedPrice = findTargetPrice(id);

        setTotal(prev => prev + 1);
        setTotalPrice((prev) => {
            if (!selectedPrice) {
                return prev;
            } else {
                return prev + selectedPrice;     
            }
        });
    }

    const handleMinus = (id: number) => {
        const selectedPrice = findTargetPrice(id);

        setTotal(prev => prev - 1);
        setTotalPrice((prev) => {
            if (!selectedPrice) {
                return prev;
            } else {
                return prev - selectedPrice;     
            }
        });
    }

    const findTargetPrice = (id:number) => {
        const selectedData = data.find((item) => item.id === id);
        const targetPrice = selectedData?.price;
        return targetPrice;
    }



    
    return (
        <>
            <div id={styled.counterBox}>
                {data.map(item => <Counter key={item.id} data={item} onMinus={handleMinus} onPlus={handlePlus}></Counter>)}
            </div>
            <div className={styled.total}> 총 개수 : {total}</div>
            <div className={styled.total}> 총 가격 : {totalPrice}</div>
        </>
    )
}