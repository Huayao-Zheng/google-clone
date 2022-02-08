import React, { createContext, useContext, useState } from 'react';

const GSearchContext = createContext();
const API_URL = 'https://google-search3.p.rapidapi.com/api/v1';

export const GSearchContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResultsByType = async (type) => {
        setLoading(true);

        console.log(process.env.REACT_APP_API_KEY);
        try {
            const response = await fetch(`${API_URL}${type}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                },
            });
            const data = await response.json();

            console.log(data);

            setResults(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const contextValue = { getResultsByType, results, searchTerm, setSearchTerm, loading };

    return <GSearchContext.Provider value={contextValue}>{children}</GSearchContext.Provider>;
};

export const useGSearchContext = () => useContext(GSearchContext);
