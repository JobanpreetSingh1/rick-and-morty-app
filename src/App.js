// App.js
import React, { useState } from 'react';
import EpisodeList from './components/episodelist';
import CharacterList from './components/characterlist';
import './App.css';

const App = () => {
    const [selectedEpisode, setSelectedEpisode] = useState(null);

    const handleSelectEpisode = (episodeId) => {
        setSelectedEpisode(episodeId);
    };

    return (
        <div className="app">
            <EpisodeList onSelectEpisode={handleSelectEpisode} selectedEpisode={selectedEpisode} />
            <CharacterList episodeId={selectedEpisode} />
        </div>
    );
};

export default App;
