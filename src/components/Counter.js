import { useState } from "react";
import Button from './Button';

function Counter() {
    const [counter, setCounter] = useState(10)

    const handleClick = function () {
        setCounter(counter + 1);
    }

    return <div>
        <div>The count is {counter}</div>
        <Button primary onClick={handleClick}>Increment!</Button>
    </div>

}

export default Counter;