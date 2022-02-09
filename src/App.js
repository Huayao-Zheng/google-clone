import React, { useState } from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <main className={darkTheme ? 'dark' : null}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes />
                <Footer />
            </div>
        </main>
    );
};

export default App;
