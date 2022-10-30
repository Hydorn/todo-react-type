import React, { ReactNode, useEffect, useState } from "react";
import { text } from "stream/consumers";
import { JsxAttribute } from "typescript";
import "./App.css";
import ListItem from "./Components/ListItem";
import TodoAdd from "./Components/TodoAdd";

type ItemProps = {
  text: string;
  done: boolean;
};

type mapList = (arr:ItemProps[], done:boolean) => ReactNode;

const LISTA: ItemProps[] = [];


const App = () => {
  let Now = new Date();
  const DATE = {
    hours: Now.getHours(),
    minutes: Now.getMinutes(),
    seconds: Now.getSeconds()
  }

  const [count, setCount] = useState(`${DATE.hours}:${DATE.minutes}:${DATE.seconds<10?"0"+DATE.seconds:DATE.seconds}`);
  const [itemList, setItemList] = useState<ItemProps[]>(LISTA);
  useEffect(()=>{
    document.title = `La hora es ${count}`;
  })
  useEffect(()=>{
    setTimeout(()=>{setCount(`${DATE.hours}:${DATE.minutes}:${DATE.seconds<10?"0"+DATE.seconds:DATE.seconds}`)},1000);
  })
  const handleOnChangeItem = (index: number, value: boolean) => {
    itemList[index].done=value;
    setItemList([...itemList]);
  };

  const handleOnAddItem = (texto: string) => {
    const newItem:ItemProps = {text: texto, done: false};
    const newList = [...itemList, newItem];
    setItemList(newList);
  };

  const mapDone:mapList = (arr,done) => {
    const newList:JSX.Element[]=[]
    arr.map((item,ind)=>{
      if(item.done==done){newList.push(
        <ListItem
          text= {item.text}
          checked = {item.done}
          key = {ind}
          onChange = {(value)=>handleOnChangeItem(ind,value)}
        />
      )}
    })
    return newList;
  }

  return (
    <div className="todo-container">
      <h1>Lista de quehaceres</h1>
      <TodoAdd onAdd={handleOnAddItem} />
      <p>{`La hora es ${count}`}</p>
      <div className="lists-wrapper">
        <div className="panel todo">
          <h2>Por hacer:</h2>
          <div className="list">
          {
          mapDone(itemList, false)
          }
          </div>
        </div>
        <div className="panel done">
          <h2>Listo:</h2>
          <div className="list">
            {
            mapDone(itemList, true)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
