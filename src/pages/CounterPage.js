// import { useState } from "react";
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from "../components/Panel";

const reducer = (state, action) => {
    if (action.type === 'increment'){
        return {
            ...state, 
            count: state.count + 1,
        };
    } if (action.type === 'decrement'){
        return {
            ...state,
            count: state.count -1,
        }
    }
    if (action.type === 'change-value-to-add'){
        return {
            ...state, 
            valueToAdd: action.payload,
        }
    } if (action.type === 'sum'){
        return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0,
        }
    }

    return state;
};

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount, 
        valueToAdd: 0
    })
    console.log(state);

    const increment = () => dispatch({
        type: 'increment',
    });
    const decrement = () => dispatch({
        type: 'decrement',
    });
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: 'change-value-to-add',
            payload: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

            dispatch({
                type: 'sum',
            })
    //     setCount(count + valueToAdd);
    //     setValueToAdd(0);
    }

    return <Panel className="m-3">
        <h1 className="text-lg">The count is {state.count}</h1>
        <div className="flex flex-row">
            <Button onClick={increment}>Increment!</Button>
            <Button onClick={decrement}>Decrement!</Button>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Add a lot!</label>
            <input 
                value={state.valueToAdd || ""}
                onChange={handleChange}
                type="number" 
                className="p-1 m-3 be-gray-50 border border-gray-300"
            />
            <Button primary>Add it!</Button>
        </form>
    </Panel>

}

export default CounterPage;