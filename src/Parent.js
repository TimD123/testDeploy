

import { useRef } from "react";
import Child from "./Child";



const Parent = () => {

    const childStateRef = useRef();

    const getChildState = () => {
        const childState = childStateRef.current.change()
        console.log("STATE: ", childState)
    }


    return (
        <>
        <Child hi={1} bye={2} ref={childStateRef} />
        <button onClick={() => {getChildState()}}> get child state</button>
        </>

    )
}

export default Parent;