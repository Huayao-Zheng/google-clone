import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/images', text: '📰 Images' },
    { url: '/news', text: '📸 News' },
    { url: '/videos', text: '📺 Videos' },
];

const Links = () => {
    return (
        <div className="flex justify-between sm:justify-around items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink
                    key={url}
                    to={url}
                    // style={({ isActive }) =>
                    //     isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : undefined
                    // }
                    activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
                >
                    {text}
                </NavLink>
            ))}
        </div>
    );
};

export default Links;
