import React, { useState, useEffect } from "react";

import "./Timer.css";


const Timer = () => {

  const [time, setTime] = useState(0);

  const [intervalTime, setIntervalTime] = useState(1000); // Интервал обновления

  const [isRunning, setIsRunning] = useState(true);


  useEffect(() => {

    if (!isRunning) return;


    const timer = setInterval(() => {

      setTime((prev) => prev + 1);

    }, intervalTime);


    return () => clearInterval(timer);

  }, [isRunning, intervalTime]);


  return (

    <div className="timer">

      <h2>Таймер</h2>

      <p>Прошло времени: {time} секунд</p>

      <button onClick={() => setIsRunning(!isRunning)}>

        {isRunning ? "Пауза" : "Запустить"}

      </button>

      <button onClick={() => setTime(0)}>Сброс</button>

      <input

        type="number"

        placeholder="Интервал (мс)"

        onChange={(e) => setIntervalTime(Number(e.target.value))}

      />

    </div>

  );

};


export default Timer;