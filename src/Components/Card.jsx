import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const Card = ({ title, image, description }) => {
    return (
        <div className="card mb-8 mx-auto bg-white border border-red-600 rounded-md" style={{ maxWidth: '630px', width: '100%', height: 'auto' }}>
            <div className="flex flex-row g-0 h-full">
                <div className="w-1/3 p-2 flex items-center justify-center">
                    <div className="relative" style={{ width: '100%', height: '0', paddingBottom: '100%' }}>
                        <img 
                            src={image} 
                            className="absolute inset-0 h-full w-full object-cover rounded-lg" 
                            alt={title} 
                        />
                    </div>
                </div>
                <div className="w-2/3 p-2 flex flex-col justify-between">
                    <div className="card-body flex-grow flex flex-col justify-between">
                        <div>
                            <h5 className="card-title text-xl font-semibold">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <button className="bg-[#223A66] text-white rounded-full flex items-center justify-center" style={{ width: '168px', height: '36px', padding: '0 8px' }}>
                            <span className="flex items-center text-sm">
                                Baca Selengkapnya
                                <IoMdArrowDropright className="ml-2" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
