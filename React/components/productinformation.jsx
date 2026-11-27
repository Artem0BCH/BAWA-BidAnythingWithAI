function ProductInformation() {
    return (
        <div id="ProductInformationDiv">
            <h2>Product Information</h2>

            <label htmlFor="NameOfGood">Name of the Good *</label>
            <input
                type="text"
                id="NameOfGood"
                name="title"
                maxLength="30"
                required
            />

            <label htmlFor="DescriptionOfGood">Description of the Good *</label>
            <textarea
                id="DescriptionOfGood"
                name="description"
                maxLength="500"
                required
            />

            <label htmlFor="ProductCategoryOfGood">Product Category *</label>
            <select
                id="ProductCategoryOfGood"
                name="category"
                defaultValue=""
                required
            >
                <option value="" disabled>
                    Select a category
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Furniture">Furniture</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Collectibles">Collectibles</option>
                <option value="Sports">Sports</option>
                <option value="HomeAndGarden">Home & Garden</option>
                <option value="Books">Books</option>
                <option value="ToysAndGames">Toys & Games</option>
                <option value="Other">Other</option>
            </select>

            <label htmlFor="ProductConditionOfGood">Product Condition *</label>
            <select
                id="ProductConditionOfGood"
                name="condition"
                defaultValue=""
                required
            >
                <option value="" disabled>
                    Select condition
                </option>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Very good">Very Good</option>
                <option value="Good">Good</option>
                <option value="Acceptable">Acceptable</option>
                <option value="For Parts / Not Working">
                    For Parts / Not Working
                </option>
            </select>
        </div>
    );
}

export default ProductInformation;
