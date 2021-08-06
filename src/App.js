import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
    );
}

export default App
