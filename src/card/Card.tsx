import styled from './Card.module.css'

type propsState = {
    onAdd: (id: number) => void;
    data: {
        id: number,
        name: string,
        price: number,
    }
}

export default function Card(props: propsState) {
    const { data,onAdd } = props;

    const handleAddItem = (target:number) => {
        onAdd(target)
    }

    return (
        <>
            <div className={styled.card}>
                <div>{data.name}</div>
                <div>{data.price}</div>
            </div>
            <button onClick={() =>handleAddItem(data.id)}>구매하기</button>
        </>
    )

}