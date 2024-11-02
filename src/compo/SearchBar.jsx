import React from 'react';
import Profile from './Profile';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex items-center mb-4 ">
          <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded-md p-2 pl-10 flex-grow" 
                style={{ backgroundImage: `url('https://img.icons8.com/ios/25/search.png')`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center' }} // Icon as background
                placeholder=" " 
            />
            <div className="flex ml-4 space-x-2">
              
                <Profile name="John Doe" email="john.doe@example.com"/>
            </div>
        </div>
    );
};

export default SearchBar;
