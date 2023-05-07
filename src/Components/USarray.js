import React, { useState } from "react";

function USarray(props) {
  const [items, setItems] = useState([]);
  const addItem = () => {
    console.log(items);
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  //appending new item with id and value
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default USarray;
