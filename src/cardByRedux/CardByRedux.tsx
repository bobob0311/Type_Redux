import { useState } from "react";
import { useCounterDispatch } from "../hooks";
import { incrementByAmount } from "../counterByRedux/counterSlice";
import styled from "./CardByRedux.module.css"

type CardByReduxProps = {
    data: ItemType,
}

type ItemType = {
  id: number;
  name: string;
  price: number;
};

export default function CardByRedux(props: CardByReduxProps) {
    const {data} = props;
    const {name,price,id} = data;
    
    const [cnt, setCnt] = useState<number>(0);
    const dispatch = useCounterDispatch()

    const handlePlusClick = () => {
        setCnt(prev => prev + 1);
    }

    const handleMinusClick = () => {
        if (cnt > 0) {
            setCnt(prev => prev - 1);    
        }
    }

    const handleBuyClick = () => {
        if (cnt > 0) {
            dispatch(incrementByAmount({count:cnt, price: price,id:id, name : name}));
            setCnt(0);
        }
    }
    

    return (
        <div className={styled.container}>
            <div>
                <div>{name}</div>
                <div>{price} 원</div>
                <div>개수 : {cnt}</div>
                <button onClick={handlePlusClick}>+</button>
                <button onClick={handleMinusClick}>-</button>
            </div>
            <button onClick={handleBuyClick}>구매하기</button>
        </div>
    )
}