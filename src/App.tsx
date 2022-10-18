import React, { ReactNode, useState } from "react";
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

  const [itemList, setItemList] = useState<ItemProps[]>(LISTA);

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
      <div className="lists-wrapper">
        <div className="panel todo">
          <h2>Por hacer:</h2>
          <div className="list">
          {mapDone(itemList, false)}
          </div>
        </div>
        <div className="panel done">
          <h2>Listo:</h2>
          <div className="list">
            {mapDone(itemList, true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
