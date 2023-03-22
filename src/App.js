import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => setSelected(option);

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'}
    ]

    return <Dropdown selected={selected} onSelect={handleSelect} options={options}></Dropdown>
}

export default App;