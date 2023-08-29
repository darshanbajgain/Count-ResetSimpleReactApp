
import { useState } from 'react';
function CountReset() {
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
            setMessage("Already in default state, i.e. 0.\nCan't reset a default value. ");
            setIsVisible(true);
        }
    }

    return (
        <div className=" flex flex-col rounded-3xl justify-center items-center p-8 md:m-auto m-4 md:w-[60%]  bg-slate-600">
            <h1 className="text-white text-2xl font-semibold m-2 p-2"> {count} </h1>
            <button className="uppercase bg-white font-extrabold sm:text-1xl text-base  text-cyan-400  m-2 px-4 py-4 rounded-2xl hover:bg-cyan-400 hover:text-white  transition 500" onClick={changeValue} >
                count
            </button>
            <button className="uppercase bg-white font-extrabold sm:text-1xl text-base  text-cyan-400  m-2 px-4 py-4 rounded-2xl hover:bg-cyan-400 hover:text-white   transition 500" onClick={resetValue} >
                reset
            </button>

            < p className={isVisible ? 'flex m-auto my-2 w-[100%] justify-center text-center px-6 py-8 bg-slate-900 rounded-2xl text-green-600 text-base' : 'none'}>
                {message}</p>


        </div>
    )
}

export default CountReset;