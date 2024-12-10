import './App.css';
import CounterBox from './counter/ConterBox';
import Card from './card/Card';
import { useState } from 'react';

type ItemType = {
  id: number;
  name: string;
  price: number;
  buy: boolean;
};

const DUMMY_DATA: ItemType[] = [
  { id: 1, name: '사과', price: 600 , buy: false},
  { id: 2, name: '바나나', price: 800 , buy:false},
  { id: 3, name: '멜론', price: 1200 , buy:false},
]

function App() {
  const [item, setItem] = useState<ItemType[]>([]);

  const handleAddCounter = (id: number) => {
    setItem(prev => {
      const exists = prev.some(el => el.id === id);
      if (exists) return prev;

      const newItem = DUMMY_DATA.find(el => el.id === id);
      return newItem ? [...prev, newItem] : prev;
    });
  }

  return (

    <>
      <div className='cardContainer'>
        {DUMMY_DATA.map((item) => <Card key={item.id} onAdd={(id) => handleAddCounter(id)} data={item}></Card>)} 
      </div>
      <CounterBox data={item} />
    </>
  )
}

export default App
