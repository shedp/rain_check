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
            <div className="flex flex-row items-center justify-center space-x-4">
                <input type="text" className="text-xl font-light p-2 px-6 w-96 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl" placeholder="Search a city..." value={inputValue}
                    onChange={handleInputChange} />
                <UilSearch onClick={handleSearchClick} size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>
            <div className="flex flex-row items-center justify-start">
                <button onClick={handleUnitChange} name="metric" className="text-white text-xl font-light p-2 hover:font-bold">°C</button>
                <p className="text-white text-xl font-light m-1">|</p>
                <button onClick={handleUnitChange} name="imperial" className="text-white text-xl font-light p-2 hover:font-bold">°F</button>
            </div>
        </div>
    )

}

export default Inputs;