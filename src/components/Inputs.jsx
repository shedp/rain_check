import { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons'

function Inputs({ setCity_Name, unit, setUnit }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearchClick = () => {
        if (inputValue !== "") {
            setCity_Name(inputValue)
        }
    };

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (unit !== selectedUnit) {
            setUnit(selectedUnit)
        }
    };


    return (
        <div className="flex flex-row justify-center ny-6">
            <div className="flex flex-row w-e/4 items-center justify-center space-x-4">
                <input type="text" className="text-xl font-light p-3 w-96 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg" placeholder="Search a city..." value={inputValue}
                    onChange={handleInputChange} />
                <UilSearch onClick={handleSearchClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button onClick={handleUnitChange} name="metric" className="text-white text-xl font-light p-2">°C</button>
                <p className="text-white text-xl font-light m-1">|</p>
                <button onClick={handleUnitChange} name="imperial" className="text-white text-xl font-light p-2">°F</button>
            </div>
        </div>
    )

}

export default Inputs;