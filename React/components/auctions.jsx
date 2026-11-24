// React Imports (Stuff we didn't make)
import { useEffect, useState } from "react";

function Auctions() {
    const [auctions, setAuctions] = useState([]); // these are explained in showusers
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getAuctions() {
            try {
                // fetches auctions from the dataserver path
                const response = await fetch("/BAWAdb/auctions");

                if (!response.ok) {
                    // if the response is opposite of ok throw an error
                    throw new Error("Failed to retrieve auctions");
                }

                const data = await response.json(); // web request into usable json

                setAuctions(data); // holds data
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getAuctions();
    }, []);

    if (loading) {
        return <p>Loading auctions...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <h1>Active auctions</h1>

            {auctions.map((auction) => (
                <article key={auction.auction_id}>
                    <h2>{auction.title}</h2>

                    <p>{auction.description}</p>

                    <p>Category: {auction.category_name}</p>

                    <p>Current price: {auction.current_price} €</p>

                    <p>Starting price: {auction.starting_price} €</p>

                    <p>Ends: {auction.end_time}</p>
                </article>
            ))}
        </>
    );
}

export default Auctions;
