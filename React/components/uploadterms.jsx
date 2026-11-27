function UploadTerms() {
    return (
        <div>
            <label htmlFor="AgreeToSUploadingCheckOfGood">
                By clicking this I agree to follow the{" "}
                <a href="/information.html" target="_blank">
                    Terms of Service
                </a>{" "}
                of uploading, and to act in good faith.
            </label>

            <input
                type="checkbox"
                id="AgreeToSUploadingCheckOfGood"
                name="agrees_to_terms"
                value="true"
                required
            />
        </div>
    );
}

export default UploadTerms;
