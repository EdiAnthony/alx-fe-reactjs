import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
