import React, { useState } from "react";

import "./Counter.css";


const Counter = () => {

  const [count, setCount] = useState(0);


  return (

    <div className="counter">

      <h2>Счетчик</h2>

      <p>Текущее значение: {count}</p>

      <button onClick={() => setCount(count + 1)}>Увеличить</button>

      <button onClick={() => setCount(count - 1)}>Уменьшить</button>

    </div>

  );

};


export default Counter;