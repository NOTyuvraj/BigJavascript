import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { Toggle } from './component/Toggle';

import "./App.css"

export const App = () => {  
  const [count , setCount] = useState({counter : 0});
  const [isDark , setIsDark] = useLocalStorage("isDark",false);
  
  const Increment = () =>{ 
    const newCount = {...count ,counter : count.counter+1};
    setCount(newCount);
  }
  const Decrement = () =>{ 
    const newCount = {...count ,counter : count.counter-1};
    setCount(newCount);
  }
  const Reset = () =>{ 
    const newCount = {...count ,counter : 0};
    setCount(newCount);
  }

  return (
    <div className='main' data-theme={isDark ? "dark" : "light"}>
      <Toggle 
        isChecked={isDark}
        handleChange={()=>setIsDark(!isDark)}
      />
      <div className='counter'>{count.counter}</div>
      <div className='counter-btns'>
        <button className='counter-btn' onClick={Decrement}>Decrement</button>
        <button className='counter-btn' onClick={Reset}>Reset</button>
        <button className='counter-btn' onClick={Increment}>Increment</button>
      </div>
    </div>
  )
}
