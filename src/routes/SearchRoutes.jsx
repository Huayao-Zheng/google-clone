import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SearchResults from '../components/SearchResults';
import NoMatch from '../components/NoMatch';

const SearchRoutes = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/search" />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/images" element={<SearchResults />} />
                <Route path="/news" element={<SearchResults />} />
                <Route path="/videos" element={<SearchResults />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
};

export default SearchRoutes;
