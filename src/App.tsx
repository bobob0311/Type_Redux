import './App.css';
import CounterBox from './counter/ConterBox';
import Card from './card/Card';
import { useState } from 'react';
import { CounterByRedux } from './counterByRedux/CounterByRedux';
import CardBoxByRedux from './cardByRedux/CardBoxByRedux';

type ItemType = {
  id: number;
  name: string;
  price: number;
  count: number;
};

type addItemType = {
  target: number,
  count: number,
}

type totalType = {
  totalCount: number,
  totalPrice : number,
}

const DUMMY_DATA: ItemType[] = [
  { id: 1, name: '사과', price: 600, count: 0},
  { id: 2, name: '바나나', price: 800 , count: 0},
  { id: 3, name: '멜론', price: 1200 , count: 0},
]

function App() {
  const [item, setItem] = useState<ItemType[]>([]);
  const [total, setTotal] = useState<totalType>({ totalCount: 0, totalPrice: 0 });

  const handleAddCounter = (addItem:addItemType) => {
    setItem((prev) => {
      const exists = prev.find((item) => item.id === addItem.target);
      if (exists) {
        return prev.map((item) =>
          item.id === addItem.target
            ? { ...item, count: item.count + addItem.count }
            : item
        );
      }
      const newItem = DUMMY_DATA.find((item) => item.id === addItem.target);
      if (newItem) {
        return [...prev, { ...newItem, count: addItem.count }];
      }
      return prev;
    })

    setTotal((prev) => {
      const selectedItem = DUMMY_DATA.find((item) => item.id === addItem.target);
      if (selectedItem) {
      return {
        totalCount: prev.totalCount + addItem.count,
        totalPrice: prev.totalPrice + selectedItem.price * addItem.count,
      };
      } else {
        return prev;
    }
    })
    

  }
  const handlePlusClick = (id: number) => {
    setItem((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      );
    });
    setTotal((prev) => {
      const selectedItem = DUMMY_DATA.find((item) => item.id === id);
      if (selectedItem) {
        return {
          totalCount: prev.totalCount + 1,
          totalPrice: prev.totalPrice + selectedItem.price,
        }  
      } else {
        return {
          ...prev,
        }
      }
      })
  }

  const handleMinusClick = (id:number) => {
    setItem((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, count: item.count - 1 }
          : item
      );
    });
        setTotal((prev) => {
      const selectedItem = DUMMY_DATA.find((item) => item.id === id);
      if (selectedItem) {
        return {
          totalCount: prev.totalCount - 1,
          totalPrice: prev.totalPrice - selectedItem.price,
        }  
      } else {
        return {
          ...prev,
        }
      }
      })
  }

  return (

    <>
      <div className='cardContainer'>
        {DUMMY_DATA.map((item) => <Card key={item.id} onAdd={(addItem) => handleAddCounter(addItem)} data={item}></Card>)} 
      </div>
      <CounterBox data={item} onPlus={(id) => handlePlusClick(id)} onMinus={(id) => handleMinusClick(id)} total={total} />
      <CardBoxByRedux/>
      <CounterByRedux/>
    </>
  )
}

export default App
