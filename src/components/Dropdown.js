import { useState } from "react";

function Dropdown({ options }) {
    // const [selected, setSelected] = useState('Select...');
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setIsOpen(false);
        console.log(option.value);
    }
    const handleClick = () => setIsOpen(!isOpen)

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    return <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
}

export default Dropdown