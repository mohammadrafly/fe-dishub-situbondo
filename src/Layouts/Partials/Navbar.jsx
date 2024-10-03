import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className="bg-[#223A66]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img className="h-8 w-auto" src="/assets/images/logoDishub.png" alt="Your Company" />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex h-full space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase transition ${
                                        isActive ? "bg-gray-400" : "hover:bg-gray-400"
                                    }`
                                }
                            >
                                Beranda
                            </NavLink>
                            <NavLink
                                to="/berita"
                                className={({ isActive }) =>
                                    `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase transition ${
                                        isActive ? "bg-gray-400" : "hover:bg-gray-400"
                                    }`
                                }
                            >
                                Berita
                            </NavLink>
                            <NavLink
                                to="/tentang-kami"
                                className={({ isActive }) =>
                                    `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase transition ${
                                        isActive ? "bg-gray-400" : "hover:bg-gray-400"
                                    }`
                                }
                            >
                                Tentang Kami
                            </NavLink>
                            <NavLink
                                to="/jadwal-transportasi"
                                className={({ isActive }) =>
                                    `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase transition ${
                                        isActive ? "bg-gray-400" : "hover:bg-gray-400"
                                    }`
                                }
                            >
                                Jadwal Transportasi
                            </NavLink>
                            <NavLink
                                to="/pengaduan"
                                className={({ isActive }) =>
                                    `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase transition ${
                                        isActive ? "bg-gray-400" : "hover:bg-gray-400"
                                    }`
                                }
                            >
                                Pengaduan
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleMobileMenu}
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={mobileMenuOpen ? "hidden" : "block h-6 w-6"}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={mobileMenuOpen ? "block h-6 w-6" : "hidden"}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {mobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase ${isActive ? "bg-gray-400" : "hover:bg-gray-400"}`}
                        >
                            Beranda
                        </NavLink>
                        <NavLink
                            to="/berita"
                            className={({ isActive }) => `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase ${isActive ? "bg-gray-400" : "hover:bg-gray-400"}`}
                        >
                            Berita
                        </NavLink>
                        <NavLink
                            to="/jadwal-transportasi"
                            className={({ isActive }) => `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase ${isActive ? "bg-gray-400" : "hover:bg-gray-400"}`}
                        >
                            Jadwal Transportasi
                        </NavLink>
                        <NavLink
                            to="/pengaduan"
                            className={({ isActive }) => `flex items-center h-full px-3 py-2 text-sm font-medium text-white uppercase ${isActive ? "bg-gray-400" : "hover:bg-gray-400"}`}
                        >
                            Pengaduan
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
