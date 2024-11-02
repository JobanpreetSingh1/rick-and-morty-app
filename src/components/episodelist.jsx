// EpisodeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ricky.css';

const EpisodeList = ({ onSelectEpisode, selectedEpisode, isMobile }) => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/episode');
            setEpisodes(response.data.results);
        };
        fetchEpisodes();
    }, []);

    return (
        // Only show episodes if none is selected on mobile, or if it's desktop
        <div className={`episode-list ${isMobile && selectedEpisode ? 'hide' : ''}`}>
            <h2>Episodes</h2>
            <ul>
                {episodes.map(episode => (
                    <li
                        key={episode.id}
                        onClick={() => onSelectEpisode(episode.id)}
                        className={`episode-item ${episode.id === selectedEpisode ? 'selected' : ''}`}
                    >
                        {episode.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EpisodeList;
