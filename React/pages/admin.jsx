// React components (Custom stuff we made)
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import ShowUsers from "../components/showusers.jsx";

// React Imports (Stuff we didn't make)

function AdminPage() {
    
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
                                    <ShowUsers />
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
