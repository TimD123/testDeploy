
import { useImperativeHandle } from "react";
import { useState } from "react";
import { forwardRef } from "react";


const Child = ({hi, bye}, ref) => {

    const [count, setCount] = useState(11);

    useImperativeHandle(ref, () => (
        {
            change
        }
    ))

    const change = () => {
        return count;
    }

    return (
        <h6> {hi} {bye} </h6>
    )
}

export default forwardRef(Child);