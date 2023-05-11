import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface Character {
  id: string;
  name: string;
}

function App() {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/characters');
        setCharacters(resp.data.data.results);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };

    sendGetRequest();
  }, []);

  if (characters == undefined || !characters.length) return <h3>Loading...</h3>;

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}

export default App;
