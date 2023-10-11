import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Inputs() {
    return (
        <div className="flex flex-row justify-center ny-6">
            <div className="flex flex-row w-e/4 items-center justify-center space-x-4">
                <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" placeholder="Search a city..." />
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-white text-xl font-light p-2">°C</button>
                <p className="text-white text-xl font-light m-1">|</p>
                <button name="metric" className="text-white text-xl font-light p-2">°F</button>
            </div>
        </div>
    )

}

export default Inputs