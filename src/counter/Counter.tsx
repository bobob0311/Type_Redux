import { useState } from "react"
import styles from './Counter.module.css'
type propsState = {
    onPlus: () => void,
}
export default function Counter(props:propsState) {
    const {onPlus} = props
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <div className={styles.box}>
            <span>count : {count}</span>
            <button
                onClick={() => {
                    handleClick();
                    onPlus();
                }}
            >+</button>
        </div>
    )
}