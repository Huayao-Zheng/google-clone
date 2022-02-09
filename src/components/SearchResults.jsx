import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

import { useGSearchContext } from '../contexts/GSearchContextProvider';

import Loader from './Loader';

const SearchResults = () => {
    const { getResultsByType, results, searchTerm, loading } = useGSearchContext();
    const { pathname } = useLocation();

    useEffect(() => {
        if (searchTerm.length > 0) {
            if (pathname === '/videos') {
                getResultsByType(`/search/q=${searchTerm} videos`);
            } else {
                getResultsByType(`${pathname}/q=${searchTerm}&num=40`);
            }
        }
    }, [searchTerm, pathname]);

    if (loading) return <Loader />;

    if (pathname === '/search') {
        return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                {results?.map(({ link, title }, idx) => (
                    <div key={title + idx} className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <p className="text-sm">{link.length > 30 ? `${link.substring(0, 27)}...` : link}</p>
                            <p className="text-lg hover:underline text-blue-700 dark:text-blue-300">{title}</p>
                        </a>
                    </div>
                ))}
            </div>
        );
    }
    if (pathname === '/images') {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {results?.map(({ image, link }, idx) => (
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={`${link.title}${idx}`}
                        className="overflow-hidden sm:p-3 p-5  group"
                    >
                        <img
                            src={image?.src}
                            alt={link.title}
                            loading="lazy"
                            className="group-hover:scale-105 ease-linear duration-100"
                        />
                        <p className="sm:w-36 w-36 break-words text-sm mt-2">{link.title}</p>
                    </a>
                ))}
            </div>
        );
    }
    if (pathname === '/news') {
        return (
            <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
                {results?.map(({ id, link, source, title }, idx) => (
                    <div key={`${id}${idx}`} className="md:w-2/5 w-full ">
                        <a href={link} target="_blank" rel="noreferrer " className="hover:underline ">
                            <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                        </a>
                        <div className="flex gap-4">
                            <a
                                href={source?.href}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:underline hover:text-blue-300"
                            >
                                {source?.href}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    if (pathname === '/videos') {
        return (
            <div className="flex flex-wrap ">
                {results?.map((video, index) => (
                    <div key={index} className="p-2">
                        <ReactPlayer url={video.link} controls width="355px" height="200px" />
                    </div>
                ))}
            </div>
        );
    }

    return 'Something went wrong!';
};

export default SearchResults;
