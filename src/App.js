import React from 'react';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(" ");
  const [isVisible, setIsVisible] = useState(false);
  const changeValue = () => {
    setCount(count + 1);
    setMessage(" ");
    setIsVisible(false);
  }
  const resetValue = () => {
    setCount(0)
    if (count === 0) {
      setMessage("Value is already in default state.i.e '0'");
      setIsVisible(true);
    }
  }

  return (
    <div className=' block mx-20'>
      <h1 className='text-black text-center font-extrabold text-3xl uppercase m-30 p-16'>
        Count-Reset App
      </h1>
      <div className=" flex flex-col rounded-3xl justify-center items-center p-10 m-auto w-[50%] max-w-[400] max-h-[400] bg-slate-500">
        <h1 className="text-white text-2xl font-semibold"> {count} </h1>
        <button className="bg-white font-extrabold text-5xl font-montserrat text-cyan-400  m-5 px-8 py-4 rounded-3xl hover:bg-cyan-400 hover:text-white  transition 500" onClick={changeValue} >
          +
        </button>
        <button className="bg-white font-extrabold text-5xl font-montserrat text-cyan-400  m-5 px-8 py-4 rounded-3xl hover:bg-cyan-400 hover:text-white   transition 500" onClick={resetValue} >
          reset
        </button>
<<<<<<< HEAD
        <p className= {isVisible?'transition 400 flex m-auto w-[80%] justify-center text-center px-6 py-8 bg-white rounded-2xl text-red-700 text-lg': 'none'}>
=======

          {message}
        </p>
      </div>
    </div>
  );
}

export default App;
/*building done */
