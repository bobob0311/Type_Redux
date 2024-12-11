import styles from './Counter.module.css'
type data = {
    id: number;
  name: string;
  price: number;
  count: number;
}

type propsState = {
    data: data,
    onMinus: (id :number) => void,
    onPlus: (id :number) => void,
}
export default function Counter(props:propsState) {
    const { data,onMinus,onPlus } = props



    return (
        <div className={styles.box}>
            <span>{data.name}</span>
            <span>개수 : {data.count}</span>
            <span>가격 : {data.price}</span>
            <span>총 가격 : { data.price * data.count}</span>
            <div>
                <button onClick={() => onMinus(data.id)}>-</button>
                <button onClick={() => onPlus(data.id)}>+</button>
            </div>
        </div>
    )
}