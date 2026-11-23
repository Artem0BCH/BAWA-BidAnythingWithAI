// React components (Custom stuff we made)
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

// React Imports (Stuff we didn't make)
import { useState } from "react";

function AdminPage() {
    const [users, setUsers] = useState([]); // consting so it holds data and something like .map() won't die
    const [error, setError] = useState(""); // consting error so it holds error and doesn't allow empty errors
    const [loading, setLoading] = useState(false); // consting so we know if it's loading or not. False basically means stopped loading (no specific reason)

    async function getUsers() {
        // making getUsers function because we wanna get the users because that's the thing we are trying to get
        try {
            setLoading(true);
            setError("");

            const response = await fetch("/BAWAdb/users"); // this requests from 4000, and this is basically from the browser aka from the dataserver and we don't need to say full link cuz it's configed anyway

            if (!response.ok) {
                // if response opposite of ok (not ok, basically something went wrong)
                throw new Error(`Server returned ${response.status}`);
            } // Give error status if response ain't ok

            const data = await response.json();

            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <main>
                <Header />
                <section id="firstsection">
                    <div>
                        <h1>Admin Panel</h1>
                        <div>
                            <div id="informationRequests">
                                <h1>Information Requests</h1>
                                <div id="informationRequestsLower">
                                    <label htmlFor="showUsersButton">
                                        Pulls users from Database
                                    </label>

                                    <button
                                        id="showUsersButton"
                                        onClick={getUsers}
                                    >
                                        Get Users
                                    </button>

                                    {loading && (
                                        <p>
                                            Loading Users, this can take a
                                            moment...
                                        </p>
                                    )}

                                    {error && <p>{error}</p>}

                                    {!loading && !error && users.length > 0 && (
                                        <ul>
                                            {users.map((user) => (
                                                <li key={user.user_id}>
                                                    {user.username}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}
export default AdminPage;
