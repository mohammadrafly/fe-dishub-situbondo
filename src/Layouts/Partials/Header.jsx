import React from 'react';

const Header = () => (
    <div className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
            <li>
            <a href="mailto:email@example.com" className="text-gray-700 flex items-center">
                <i className="icofont-support-faq mr-2"></i>
                email@example.com
            </a>
            </li>
            <li className="flex items-center text-gray-700">
            <i className="icofont-location-pin mr-2"></i>
            Alamat: JL. Semeru No. 12 - Kec. Panji - SITUBONDO
            </li>
        </ul>
        <div className="text-right">
            <a href="tel:+62-338-678150" className="text-gray-700">
            <span>NOMOR TELEPON: </span>
            <span className="font-bold">(0338)678-150</span>
            </a>
        </div>
        </div>
    </div>
);

export default Header;
