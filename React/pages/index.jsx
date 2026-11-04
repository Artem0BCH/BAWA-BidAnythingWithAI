import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";

function Index() {
    return (
        <>
            <main>
                <Header />
                <section id="firstsection">
                    <h1>Welcome to BAWA</h1>
                    <h3>Worlds best AI integrated fullstack system</h3>
                    <h3>Already Have an Account? If not, why not make one?</h3>
                    <button id="logInButton">Log in</button>
                    <button id="accountCreationButton">Make an Account</button>

                    <h2>Explore our innovative systems</h2>

                    <a href="default.asp">
                        <img
                            src="placeholder.img"
                            alt="Image Link to Our innovative systems"
                        />
                    </a>

                    <h2>Our 3 Promises</h2>
                    <ul>
                        <li>Promise of Safety</li>
                        <li>Promise of Fairness</li>
                        <li>Promise of Improvement</li>
                    </ul>

                    <h2>Why us?</h2>
                    <h3>
                        We are a fresh company managed by fresh talent, we
                        always wish to improve and give our customers what they
                        have always dreamed of -- a platform where you can spend
                        on anything you wish for, and for things you need -- all
                        in <b>One</b> place.
                    </h3>
                </section>
                <Footer />
            </main>
        </>
    );
}
export default Index;
