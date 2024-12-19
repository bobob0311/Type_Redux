import CardByRedux from "./CardByRedux";
import styled from "./CardBoxbyRedux.module.css"
type ItemType = {
  id: number;
  name: string;
  price: number;
};

const DUMMY_DATA: ItemType[] = [
  { id: 1, name: '사과', price: 600},
  { id: 2, name: '바나나', price: 800},
  { id: 3, name: '멜론', price: 1200},
]

export default function CardBoxByRedux() {
  return (
    <div className={styled.container}>
      {DUMMY_DATA.map(item => <CardByRedux key={item.id} data={item}/>)}
    </div>
  )
}