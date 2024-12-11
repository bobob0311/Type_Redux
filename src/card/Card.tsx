import styled from './Card.module.css'
import { useState } from 'react';

type propsState = {
    onAdd: (item : item) => void;
    data: {
        id: number,
        name: string,
        price: number,
    }
}

type item = {
    target: number,
    count: number
}

export default function Card(props: propsState) {
    const [count, setCount] = useState<number>(0);
    const { data,onAdd } = props;

    const handleAddItem = (item:item) => {
        onAdd(item)
    }

    const handlePlusClick = () => {
        setCount(prev => prev + 1);
    }

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(prev => prev -1);    
        }
    }

    return (
        <>
            <div className={styled.card}>
                <div>{data.name}</div>
                <div>{data.price}</div>
                <div>개수 : {count}</div>
                <button onClick={ handlePlusClick}>+</button>
                <button onClick={ handleMinusClick}>-</button>
            </div>
            <button onClick={() => handleAddItem({ target :data.id ,count})}>구매하기</button>
        </>
    )

}