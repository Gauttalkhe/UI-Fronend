import React, { useState } from 'react';
import Card from './compo/Card';
import SearchBar from './compo/SearchBar';
import Profile from './compo/Profile';
import './App.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const cards = [
        { id: 1, name: 'Suman Talkhe', description: 'Fullstack developer', email: 'sidbhaiu@gmail.com', status: 'active' },
        { id: 2, name: 'Suresh Bhide', description: 'FrontEnd developer', email: 'sidbhaiu@gmail.com', status: 'inactive' },
        { id: 3, name: 'Mangal Gangurde', description: 'Backend Developer', email: 'sidbhaiu@gmail.com', status: 'active' },
        { id: 4, name: 'lucky Gangurde', description: 'AI Developer', email: 'sidbhaiu@gmail.com', status: 'active' },
        { id: 5, name: 'Ankita Bhide', description: 'Backend Developer', email: 'sidbhaiu@gmail.com', status: 'inactive' },
        { id: 6, name: 'Sonu Sonawane', description: 'Data Science', email: 'sidbhaiu@gmail.com', status: 'active' },

    ];

    const filteredCards = cards.filter(card => {
        const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filter === 'all' || card.status === filter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="max-w-4xl mx-auto p-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Employees</h1>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setFilter('all')}
                        className={`bg-purple-500  rounded-3xl px-6  ${filter === 'all' ? 'font-bold' : ''}`}

                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('active')}
                        className={` hover:bg-purple-500 hover:rounded-3xl px-4 py-2 ${filter === 'active' ? 'font-bold' : ''}`}
                    >
                        Active
                    </button>
                    <button
                        onClick={() => setFilter('inactive')}
                        className={` hover:bg-purple-500 hover:rounded-3xl px-4 py-2 ${filter === 'inactive' ? 'font-bold' : ''}`}
                    >
                        Inactive
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredCards.map(card => (
                    <Card key={card.id} name={card.name} description={card.description} email={card.email} />
                ))}
            </div>
        </div>
    );
};

export default App;
