import React from 'react';
import { Routes as RenamedRoutes, Route, Navigate } from 'react-router-dom';

import SearchResults from './SearchResults';
import NoMatch from './NoMatch';

const Routes = () => {
    return (
        <div className="p-4">
            <RenamedRoutes>
                <Route exact path="/" element={<Navigate replace to="/search" />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/images" element={<SearchResults />} />
                <Route path="/news" element={<SearchResults />} />
                <Route path="/videos" element={<SearchResults />} />
                <Route path="*" element={<NoMatch />} />
            </RenamedRoutes>
        </div>
    );
};

export default Routes;
