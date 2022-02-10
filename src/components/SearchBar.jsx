import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useGSearchContext } from '../contexts/GSearchContextProvider';
import Links from './Links';

const SearchBar = () => {
    const [text, setText] = useState('weather');

    const [debouncedValue] = useDebounce(text, 1000);

    const { setSearchTerm } = useGSearchContext();

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue]);

    return (
        <div className="relative sm:ml-48 md:ml-72 mt-3">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Search here..."
                className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            />
            {text.length > 0 && (
                <button onClick={() => setText('')} className="absolute top-1.5 right-4 text-2xl text-gray-500">
                    ❌
                </button>
            )}
            <Links />
        </div>
    );
};

export default SearchBar;
