import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => setSelected(option);

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'}
    ]

    return <div className="flex">
        <Dropdown value={selected} onChange={handleSelect} options={options}></Dropdown>
    </div>
}

export default DropdownPage;