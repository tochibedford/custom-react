import React, { useEffect, useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        const counterInterval = setInterval(()=>{
            setCounter(prevState=>(prevState+1))
        }, 1000)

        return ()=>{
            clearInterval(counterInterval)
        }
    }, [counter])

    return ( 
        <div>
            {counter}
        </div>
     );
}
 
export default Counter;