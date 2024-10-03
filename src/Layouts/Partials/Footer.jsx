import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto flex flex-wrap justify-center items-start">

                <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex flex-col items-start">
                    <div className="flex flex-col items-start mb-4">
                        <img
                            src="/assets/images/logoBlack.png"
                            alt="DISHUB Logo"
                            className="h-20 mr-6 ml-0"
                        />
                        <div className="text-left">
                            <p className="text-xl font-bold max-w-xs text-justify">
                                Tetap Patuhi Protokol Kesehatan Dalam Berlalu - Lintas
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-6">
                        <Link to="/" className="bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition duration-300">
                            <FaFacebookF className="text-xl text-gray-700" />
                        </Link>
                        <Link to="/" className="bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition duration-300">
                            <FaTwitter className="text-xl text-gray-700" />
                        </Link>
                        <Link to="/" className="bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition duration-300">
                            <AiFillInstagram className="text-xl text-gray-700" />
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-12 text-2xl content-between">
                    <div className="text-left">
                        <h5 className="font-bold text-gray-700 mb-2">BIDANG</h5>
                        <ul className="text-sm space-y-2">
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-600">
                                    Bidang Sarana & Prasarana Perhubungan
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-500 hover:text-pink-600">
                                    Bidang Lalu Lintas & Angkutan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-left ml-10">
                        <h5 className="font-bold text-gray-700 mb-2">SUPPORT</h5>
                        <ul className="text-sm space-y-2">
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-pink-600">
                                    UPT Pengujian
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-pink-600">
                                    ATCS
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-pink-600">
                                    Pelabuhan
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-pink-600">
                                    Terminal
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-500 hover:text-pink-600">
                                    Traffic Light
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start lg:items-start pl-9 ml-10">
                        <h5 className="font-bold text-gray-700 mb-2">Get In Touch</h5>
                        <ul className="text-sm space-y-2 text-left">
                            <li className="text-gray-500">
                                <span className="font-bold flex items-center"><IoMdMail />Support Available for 24/7</span>
                            </li>
                            <li className="text-black font-bold">dishub@situbondokab.go.id</li>
                            <li className="text-gray-500">
                                <span className="font-bold flex items-center"><RiCustomerService2Fill />Senin - Jum'at : 07:00 - 16:00 / 11:00</span>
                            </li>
                            <li className="text-black font-bold">(0338) 678150</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8">
                <p>&copy; Copyright by DISHUB SITUBONDO</p>
            </div>
        </footer>
    );
};

export default Footer;
