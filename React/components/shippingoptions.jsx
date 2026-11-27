function ShippingOptions() {
    return (
        <div id="ShippingTypesOfGood">
            <h2>Shipping type *</h2>

            <input
                type="radio"
                id="PickUpOfGood"
                name="shipping_type"
                value="Pick Up"
                defaultChecked
            />
            <label htmlFor="PickUpOfGood">Pick Up</label>

            <input
                type="radio"
                id="ShippingOfGood"
                name="shipping_type"
                value="Shipping"
            />
            <label htmlFor="ShippingOfGood">Shipping</label>

            <input
                type="radio"
                id="BothShippingTypesOfGood"
                name="shipping_type"
                value="Both"
            />
            <label htmlFor="BothShippingTypesOfGood">Both</label>

            <label htmlFor="TimeCompensationCheckOfGood">
                Would you like to be compensated for your time?
            </label>
            <input
                type="checkbox"
                id="TimeCompensationCheckOfGood"
                name="compensate_for_downtime"
                value="true"
            />
        </div>
    );
}

export default ShippingOptions;
