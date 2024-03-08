import { useState } from "react"

export default function Counter() {
    const  [count, setFunction]= useState(0);

    const handleCount = () =>{
        const newCount = count + 1;
        setFunction(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setFunction(newCount)
    }

    return (
        <div style={
            {border: "2px solid purple", margin: "20px", borderRadius: "20px"}
            }>
            <h3>Counter : {count}</h3>
            <button onClick={handleCount}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}