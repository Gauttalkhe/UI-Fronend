import React from 'react';

const Card = ({ name, description, email }) => {
    return (
<div className="flex flex-col rounded-lg shadow-lg p-4 transparent-card">
    <div className="flex items-center mb-4">
                <div className="-mt-3 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-gray-500">👤 </span>
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <p className="text-gray-500 text-sm mt-3">Email:{email}</p>
                </div>
            </div>
            <div className="mt-auto flex justify-end mx-2">
            <button className="text-black border border-black  px-4
            py-1  rounded-md">
    Blocks
</button>
                <button className="bg-black text-white rounded-md px-4 py-1 relative ml-2 hover:bg-gray-400">Details</button>
            </div>
        </div>
    );
};

export default Card;
