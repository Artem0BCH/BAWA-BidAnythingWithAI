// React components (Custom stuff we made)
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import Auctions from "../components/auctions.jsx";

// React Imports (Stuff we didn't make)

function Home() {
    return (
        <main>
            <Header />
            <Auctions />
            <Footer />
        </main>
    );
}
export default Home;
