import { useState } from "react";
import Index from "../pages/index.jsx";
import Home from "../pages/home.jsx";
import UploadingPage from "../pages/uploading.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    //const isLoggedIn = localStorage.getItem("token");
    //USE THIS LATER
    //{isLoggedIn ? <Home /> : <Index />}

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/uploading" element={<UploadingPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
