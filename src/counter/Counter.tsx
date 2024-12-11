import { useState } from "react"
import styles from './Counter.module.css'
type data = {
    id: number;
  name: string;
  price: number;
  buy: boolean;
}

type propsState = {
    onPlus: (id:number) => void,
    onMinus: (id:number) => void,
    data : data,
}
export default function Counter(props:propsState) {
    const {onPlus, onMinus, data} = props
    const [count, setCount] = useState<number>(0);

    const handlePlusClick = () => {
        setCount(prev => prev + 1);
        onPlus(data.id);
    }

    const handleMinusClick = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
            onMinus(data.id);
        }
    }

    return (
        <div className={styles.box}>
            <span>{data.name}</span>
            <span>개수 : {count}</span>
            <span>가격 : {data.price}</span>
            <span>총 가격 : { data.price * count}</span>
            <div>
                <button onClick={handleMinusClick}>-</button>
                <button onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )
}