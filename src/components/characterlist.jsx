// CharacterList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ricky.css';

const CharacterList = ({ episodeId }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            if (!episodeId) return;
            const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
            const characterPromises = response.data.characters.map(url => axios.get(url));
            const characterResponses = await Promise.all(characterPromises);
            setCharacters(characterResponses.map(res => res.data));
        };
        fetchCharacters();
    }, [episodeId]);

    return (
        <div className="character-list">
            <h2>Characters</h2>
            <div className="character-grid">
                {characters.map(character => (
                    <div key={character.id} className="character-item">
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
