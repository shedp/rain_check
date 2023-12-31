function TimeLoc({ weather: { dateTime, city, country } }) {
    return (
        <div className="m-4">
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-xl font-extralight">
                    {dateTime}
                </p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-xl">{`${city}, ${country}`}</p>
            </div>
        </div>
    )
}

export default TimeLoc