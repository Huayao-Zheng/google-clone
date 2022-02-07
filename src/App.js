import React, { useState } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchRoutes from './components/SearchRoutes';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <main className={darkTheme ? 'dark' : null}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <SearchRoutes />
                <Footer />
            </div>
        </main>
    );
};

export default App;
