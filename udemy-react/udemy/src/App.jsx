import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import "./App.css";

// import About from "./Pages/About/About.jsx";
// import Home from "./Pages/Home/Home.jsx";

const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div className="lds-hourglass" bis_skin_checked="1"></div>}>
                            <Home></Home>
                        </Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={<div className="lds-hourglass" bis_skin_checked="1"></div>}>
                            <About></About>
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
