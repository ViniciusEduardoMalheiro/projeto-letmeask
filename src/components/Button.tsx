import { useState } from "react";

export function Button() {

    const [counter, setCounter] = useState(0)

    //let counter = 0;

    function increment() {
         setCounter(counter + 1000000);
    }

   return (
       <button onClick={increment}>{counter}</button>
   ) 
}
