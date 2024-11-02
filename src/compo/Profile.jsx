import React, { useState } from 'react';

const Profile = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        console.log("Logged out");
        setIsOpen(false);
    };

    return (
        <div className="flex justify-end">
            <div className="relative inline-block text-left">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center bg-gray-100 rounded-full px-3 hover:bg-gray-200 focus:outline-none"
                >
                     <img width="30" height="30" src="https://img.icons8.com/color/24/circled-user-male-skin-type-1-2--v1.png"
                         alt="circled-user-male-skin-type-1-2--v1"/> 
                    <span className="ml-2 mr-2">{name}</span>
                    <img width="15" height="15" src="https://img.icons8.com/ios/50/expand-arrow--v1.png" alt="expand-arrow--v1"/>
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                        <div className="py-1">
                            <button
                                onClick={handleLogout}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
