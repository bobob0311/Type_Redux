import { useState } from "react"
import styles from './Counter.module.css'

export default function Counter() {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div className={styles.box}>
            <span>count : {count}</span>
            <button onClick={handleClick}>+</button>
        </div>
    )
}