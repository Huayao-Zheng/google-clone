import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGSearchContext } from '../contexts/GSearchContextProvider';

import Loader from './Loader';

const SearchResults = () => {
    const { getResultsByType, results, searchTerm, loading } = useGSearchContext();
    const { pathname } = useLocation();

    useEffect(() => {
        // getResultsByType('/search/q=JavaScript Mastery&num=40');
    }, []);

    if (loading) return <Loader />;

    if (pathname === '/search') {
        return <div></div>;
    }
    if (pathname === '/images') {
        return 'Search';
    }
    if (pathname === '/news') {
        return 'Search';
    }
    if (pathname === '/videos') {
        return 'Search';
    }

    return 'Something went wrong!';
};

export default SearchResults;
