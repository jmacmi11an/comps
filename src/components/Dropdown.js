import { useState } from "react";

function Dropdown({ options, onSelect, selected }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen)

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    return <div>
            <div onClick={handleClick}>{selected?.label || 'Select...'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
}

export default Dropdown