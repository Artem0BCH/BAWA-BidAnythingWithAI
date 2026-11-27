import { useState } from "react";

function ImageUploader({ images, setImages }) {
    const [error, setError] = useState("");

    function handleImageChange(event) {
        const selectedImages = Array.from(event.target.files);

        const availableSlots = 10 - images.length;
        const validImages = [];

        for (const image of selectedImages) {
            if (!image.type.startsWith("image/")) {
                setError("Only image files are allowed.");
                continue;
            }

            if (image.size > 10 * 1024 * 1024) {
                setError("Images cannot be larger than 10 MB.");
                continue;
            }

            validImages.push(image);
        }

        if (validImages.length > availableSlots) {
            setError("You can only add 10 images.");
        }

        setImages([...images, ...validImages.slice(0, availableSlots)]);

        event.target.value = "";
    }

    function removeImage(index) {
        const updatedImages = images.filter(
            (image, imageIndex) => imageIndex !== index,
        );

        setImages(updatedImages);
        setError("");
    }

    return (
        <div id="ImageUploadDiv">
            <label htmlFor="AddImagesOfGood">
                Add images {images.length}/10 *
            </label>

            <input
                type="file"
                id="AddImagesOfGood"
                accept="image/*"
                multiple
                onChange={handleImageChange}
            />

            {images.length > 0 && (
                <ul>
                    {images.map((image, index) => (
                        <li key={`${image.name}-${index}`}>
                            {image.name}

                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {error && <p>{error}</p>}
        </div>
    );
}

export default ImageUploader;
