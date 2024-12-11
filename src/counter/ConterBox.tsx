import Counter from './Counter'
import styled from './CounterBox.module.css'

type data = {
  id: number;
  name: string;
  price: number;
  count: number;
}

type total = {
    totalCount: number,
    totalPrice : number,
}


type propsState = {
    data: data[],
    total: total,
    onMinus: (id :number) => void,
    onPlus: (id :number) => void,
}


export default function CounterBox(props:propsState) {
    const { data, total,onPlus,onMinus } = props;
    
    const handlePlusClick = (id:number) => {
        onPlus(id);
    }
    
    const handleMinusClick = (id:number) => {
        onMinus(id);
    }

    return (
        <>
            <div id={styled.counterBox}>
                {data.map(item => <Counter
                    key={item.id}
                    data={item}
                    onPlus={(id) => handlePlusClick(id)}
                    onMinus={(id)=> handleMinusClick(id)}
                >
                    
                    </Counter>)}
            </div>
            <div className={styled.total}> 총 개수 : {total.totalCount}</div>
            <div className={styled.total}> 총 가격 : {total.totalPrice}</div>
        </>
    )
}