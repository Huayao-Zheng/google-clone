import React, { createContext, useState } from 'react';
import { Children } from 'react/cjs/react.production.min';

const GSearchContext = createContext();
const API_URL = 'https://google-search3.p.rapidapi.com/api/v1';

const GSearchContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return <GSearchContext.Provider value={{}}>{children}</GSearchContext.Provider>;
};

export default GSearchContextProvider;
