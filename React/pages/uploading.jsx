import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

function UploadingPage() {
    return (
        <>
            <main>
                <Header />
                <section id="firstsection">
                    <div>
                        <h1>Uploading</h1>
                        <div id="NoticeBeforeUploading">
                            <p>
                                An <abbr title={"Asterisk = *"}>asterisk</abbr>{" "}
                                means the field is mandatory to fill out to make
                                a listing.
                            </p>
                        </div>
                        <div id="ProductInformationDiv">
                            <h2>Product Information</h2>

                            <label htmlFor="NameOfGood">
                                Name of the Good*
                            </label>
                            <input type="text" id="NameOfGood" />
                            <label htmlFor="DescriptionOfGood">
                                Description of the Good *
                            </label>
                            <input type="text" id="DescriptionOfGood" />
                            <label htmlFor="AddImagesOfGood">
                                Add images 0/10 *
                                {/* 0 should be connected to a script, like be a variable */}
                            </label>
                            <button id="AddImagesOfGood">+</button>

                            <label htmlFor="ProductCategoryOfGood">
                                Product Category *
                            </label>
                            <select
                                id="ProductCategoryOfGood"
                                name="ProductCategoryOfGood"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select a category
                                </option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Collectibles">
                                    Collectibles
                                </option>
                                <option value="Sports">Sports</option>
                                <option value="HomeAndGarden">
                                    Home & Garden
                                </option>
                                <option value="Books">Books</option>
                                <option value="ToysAndGames">
                                    Toys & Games
                                </option>
                                <option value="Other">Other</option>
                            </select>

                            <label htmlFor="ProductConditionOfGood">
                                Product Condition *
                            </label>

                            <select
                                id="ProductConditionOfGood"
                                name="ProductConditionOfGood"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select condition
                                </option>
                                <option value="New">New</option>
                                <option value="LikeNew">Like New</option>
                                <option value="VeryGood">Very Good</option>
                                <option value="Good">Good</option>
                                <option value="Acceptable">Acceptable</option>
                                <option value="ForParts">
                                    For Parts / Not Working
                                </option>
                            </select>
                        </div>
                        <div id="AuctionSettingsDiv">
                            <h2>Auction Settings</h2>

                            <label htmlFor="StartingPriceOfGood">
                                Starting Price of the Good *
                            </label>
                            <input type="number" id="StartingPriceOfGood" />
                            <label htmlFor="MinimumIncrementOfGood">
                                Minimum increment of the Good *
                            </label>
                            <input type="number" id="MinimumIncrementOfGood" />
                            <label htmlFor="ReservePriceOfGood">
                                Reserve price of the Good
                            </label>
                            <input type="number" id="ReservePriceOfGood" />
                            <label htmlFor="StartDateTimeOfGood">
                                Start Date and Time of the Good *
                                {/* A minimum as a variable should be added which is "today" so listings cannot be put up into the past */}
                            </label>
                            <input
                                type="datetime-local"
                                id="StartDateTimeOfGood"
                            />
                            <label htmlFor="EndDateTimeOfGood">
                                End Date and Time of the Good *
                                {/* A minimum as a variable should be added which is "today" so listings cannot be put up into the past */}
                            </label>
                            <input
                                type="datetime-local"
                                id="EndDateTimeOfGood"
                            />
                            <label htmlFor="ShippingTypesOfGood">
                                Shipping type *
                            </label>
                            <fieldset>
                                <legend>Shipping type</legend>
                                <div id="ShippingTypesOfGood">
                                    <input
                                        type="radio"
                                        id="PickUpOfGood"
                                        name="ShippingTypeOfGood"
                                        value="Pick Up"
                                        defaultChecked
                                    />
                                    <label htmlFor="PickUpOfGood">
                                        Pick Up
                                    </label>

                                    <input
                                        type="radio"
                                        id="ShippingOfGood"
                                        name="ShippingTypeOfGood"
                                        value="Shipping"
                                    />
                                    <label htmlFor="ShippingOfGood">
                                        Shipping
                                    </label>

                                    <input
                                        type="radio"
                                        id="BothShippingTypesOfGood"
                                        name="ShippingTypeOfGood"
                                        value="Both"
                                    />
                                    <label htmlFor="BothShippingTypesOfGood">
                                        Both
                                    </label>
                                </div>
                            </fieldset>

                            <label htmlFor="TimeCompensationCheckOfGood">
                                Would you like to be{" "}
                                <abbr
                                    title={
                                        "Compensation means that the bid will be paused " +
                                        "when our service suffers a major disruption (e.g. a server restart). " +
                                        "In this case you don't lose any bid time."
                                    }
                                >
                                    compensated
                                </abbr>{" "}
                                for your time?
                            </label>
                            <input
                                type="checkbox"
                                id="TimeCompensationCheckOfGood"
                            />
                        </div>
                        <div id="AdditionalInformationDiv">
                            <h2>Additional information</h2>
                            <label htmlFor="LocationOfGood">
                                Location of the Good for Pick up
                            </label>
                            <input type="text" id="LocationOfGood" />
                        </div>
                        <div>
                            <label htmlFor="AgreeToSUploadingCheckOfGood">
                                By clicking this I agree to follow the{" "}
                                <span>
                                    <a href="/information.html" target="_blank">
                                        Terms of Service
                                    </a>
                                </span>{" "}
                                of uploading, and to act in good faith{" "}
                            </label>
                            <input
                                type="checkbox"
                                id="AgreeToSUploadingCheckOfGood"
                            />
                            <button disabled id="ListGood">
                                List
                            </button>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
export default UploadingPage;
