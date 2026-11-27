function AuctionSettings() {
    // date and time is in the local timezone for the user!!!
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

    const minimumDate = date.toISOString().slice(0, 16);

    return (
        <div id="AuctionSettingsDiv">
            <h2>Auction Settings</h2>

            <label htmlFor="StartingPriceOfGood">
                Starting Price of the Good *
            </label>
            <input
                type="number"
                id="StartingPriceOfGood"
                name="starting_price"
                min="0.01"
                step="0.01"
                required
            />

            <label htmlFor="MinimumIncrementOfGood">
                Minimum increment of the Good *
            </label>
            <input
                type="number"
                id="MinimumIncrementOfGood"
                name="minimum_increment"
                min="0.01"
                step="0.01"
                required
            />

            <label htmlFor="ReservePriceOfGood">
                Reserve price of the Good
            </label>
            <input
                type="number"
                id="ReservePriceOfGood"
                name="reserve_price"
                min="0.01"
                step="0.01"
            />

            <label htmlFor="StartDateTimeOfGood">
                Start Date and Time of the Good *
            </label>
            <input
                type="datetime-local"
                id="StartDateTimeOfGood"
                name="start_time"
                min={minimumDate}
                required
            />

            <label htmlFor="EndDateTimeOfGood">
                End Date and Time of the Good *
            </label>
            <input
                type="datetime-local"
                id="EndDateTimeOfGood"
                name="end_time"
                min={minimumDate}
                required
            />
        </div>
    );
}

export default AuctionSettings;