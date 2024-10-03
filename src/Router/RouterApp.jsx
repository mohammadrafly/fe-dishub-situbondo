import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Layouts/Partials/Navbar';
import Footer from '../Layouts/Partials/Footer';
import Beranda from '../Pages/Beranda';
import Berita from '../Pages/Berita';
import Header from '../Layouts/Partials/Header';

const RouterApp = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Beranda />} /> {/* Home page */}
                        <Route path="/beranda" element={<Beranda />} />
                        <Route path="/berita" element={<Berita />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default RouterApp;
