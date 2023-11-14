import { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons'
import styles from './Inputs.module.css'

function Inputs({ setCity_Name, unit, setUnit }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setCity_Name(inputValue.trim())
        }
    };

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (unit !== selectedUnit) {
            setUnit(selectedUnit)
        }
    };


    return (
        <div className="justify-center ny-6" id={styles.inputs}>
            <div className='col-span-1'></div>
            <form onSubmit={handleSubmit} className="flex flex-row justify-center ny-6 col-span-3">
                <div className="flex items-center justify-center space-x-4">
                    <input
                        type="text"
                        className="text-xl font-light p-2 px-6 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl"
                        placeholder="Search a city..."
                        value={inputValue}
                        id={styles.inputBar}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className="text-white cursor-pointer transition ease-out hover:scale-125">
                        <UilSearch size={25} />
                    </button>
                </div>
            </form>
            <div className="flex flex-row items-center justify-start capitalize col-span-1" id={styles.unitBtn}>
                <button onClick={handleUnitChange} name="metric" className="text-white text-xl font-light p-2 hover:font-bold">°C</button>
                <p className="text-white text-xl font-light m-1">|</p>
                <button onClick={handleUnitChange} name="imperial" className="text-white text-xl font-light p-2 hover:font-bold">°F</button>
            </div>
        </div>
    )

}

export default Inputs;