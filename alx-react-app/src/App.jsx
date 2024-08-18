import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <WelcomeMessage />
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves biking and photography." />
            <Footer />
        </div>
    );
}

export default App;
