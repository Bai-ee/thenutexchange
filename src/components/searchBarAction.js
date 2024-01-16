import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Implement search functionality or pass searchTerm to parent component
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="flex items-center border-2 rounded-md">
            <input 
                type="text" 
                placeholder="Search..." 
                className="chartText searchBar p-2 w-full border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

        </div>
    );
};

export default SearchBar;
