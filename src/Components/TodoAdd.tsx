import React, { useState } from "react";

type TodoAddProps = {
  onAdd?: (value: string) => void;
};

const TodoAdd: React.FC<TodoAddProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnAddItem = () => {
    if (inputValue.trim() === "") return;
    onAdd?.(inputValue);
    setInputValue("");
  };
  return (
    <div className="todo-add">
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleOnAddItem()}
      />
      <button className="add-button" onClick={handleOnAddItem}>
        +
      </button>
    </div>
  );
};

export default TodoAdd;
