import { useState } from "react"
import styles from './Counter.module.css'
type propsState = {
    onPlus: () => void,
    onMinus : () => void,
}
export default function Counter(props:propsState) {
    const {onPlus, onMinus} = props
    const [count, setCount] = useState<number>(0);

    const handlePlusClick = () => {
        setCount(prev => prev + 1);
        onPlus();
    }

    const handleMinusClick = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
            onMinus();
        }
    }

    return (
        <div className={styles.box}>
            <span>count : {count}</span>
            <div>
                <button onClick={handleMinusClick}>-</button>
                <button onClick={handlePlusClick}>+</button>
            </div>
        </div>
    )
}