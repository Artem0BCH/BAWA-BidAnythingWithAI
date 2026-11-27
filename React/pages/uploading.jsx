// React imports (we didn't make this)

import { useState } from "react";

// React components (Custom stuff we made)

import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

import ProductInformation from "../components/productinformation.jsx";
import ImageUploader from "../components/imageuploader.jsx";
import AuctionSettings from "../components/auctionsettings.jsx";
import ShippingOptions from "../components/shippingoptions.jsx";
import AdditionalInformation from "../components/additionalinformation.jsx";
import UploadTerms from "../components/uploadterms.jsx";
import ListGood from "../components/listgood.jsx";

function UploadingPage() {
    const [images, setImages] = useState([]); // saving info
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const title = formData.get("title").trim();
        const description = formData.get("description").trim();
        const category = formData.get("category");
        const condition = formData.get("condition");

        const startingPrice = Number(formData.get("starting_price"));
        const minimumIncrement = Number(formData.get("minimum_increment"));
        const reservePrice = formData.get("reserve_price");

        const startTime = new Date(formData.get("start_time"));
        const endTime = new Date(formData.get("end_time"));

        const shippingType = formData.get("shipping_type");
        const pickupLocation = formData.get("pickup_location").trim();

        if (images.length === 0) {
            setMessage("Please add at least one image.");
            return;
        }

        if (images.length > 10) {
            setMessage("You can only add 10 images.");
            return;
        }

        if (startTime < new Date()) {
            setMessage("The auction cannot start in the past.");
            return;
        }

        if (endTime <= startTime) {
            setMessage("The auction must end after it starts.");
            return;
        }

        if (reservePrice !== "" && Number(reservePrice) < startingPrice) {
            setMessage(
                "The reserve price cannot be lower than the starting price.",
            );
            return;
        }

        if (
            (shippingType === "Pick Up" || shippingType === "Both") &&
            pickupLocation === ""
        ) {
            setMessage("Please enter a pickup location.");
            return;
        }

        // temporary user ID
        const sellerId = Number(localStorage.getItem("user_id")) || 1;

        // collecting info
        const listing = {
            seller_id: sellerId,

            item: {
                title: title,
                description: description,
                category_name: category,
                condition: condition,
            },

            auction: {
                starting_price: startingPrice,
                minimum_increment: minimumIncrement,
                reserve_price:
                    reservePrice === "" ? null : Number(reservePrice),
                start_time: formData.get("start_time"),
                end_time: formData.get("end_time"),
            },

            shipping: {
                shipping_type: shippingType,
                pickup_location: pickupLocation,
                compensate_for_downtime:
                    formData.get("compensate_for_downtime") === "true",
            },

            images: images.map((image) => ({
                name: image.name,
                type: image.type,
                size: image.size,
            })),
        };

        // temporary frontend draft
        try {
            localStorage.setItem("bawa_listing_draft", JSON.stringify(listing));

            console.log("Listing information:", listing);
            console.log("Selected image files:", images);

            setMessage(
                "Listing draft saved in your browser. It has not been uploaded to the server.",
            );
        } catch (error) {
            console.error(error);
            setMessage("Could not save the listing draft.");
        }
    }

    return (
        <>
            <main>
                <Header />

                <section id="firstsection">
                    <div>
                        <h1>Uploading</h1>

                        <div id="NoticeBeforeUploading">
                            <p>
                                An <abbr title="Asterisk = *">asterisk</abbr>{" "}
                                means the field is mandatory.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <ProductInformation />

                            <ImageUploader
                                images={images}
                                setImages={setImages}
                            />

                            <AuctionSettings />

                            <ShippingOptions />

                            <AdditionalInformation />

                            <UploadTerms />

                            <ListGood />

                            {message && <p role="status">{message}</p>}
                        </form>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}

export default UploadingPage;
