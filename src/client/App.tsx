import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import TopBar from './views/top_bar';
import HomePage from './views/home_page';
import AboutPage from './views/about_page';
import ProjectPage from './views/project_page';
import './App.scss';

const App: React.FC = observer(() => {
    return (
        <div className="app">
            <TopBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<ProjectPage />} />
                </Routes>
            </main>
        </div>
    );
});

export default App;

