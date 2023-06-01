import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SongCard.css';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState({
    titulo: '',
    duracion: '',
    genero_id: '',
    album_id: '',
    artista_id: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/canciones')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/canciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSong),
      });

      if (response.ok) {
        const song = await response.json();
        setSongs([...songs, song]);
        setNewSong({
          titulo: '',
          duracion: '',
          genero_id: '',
          album_id: '',
          artista_id: '',
        });

        navigate(`/canciones/${song.id}`);
      } else {
        console.error('Error al agregar la canción');
      }
    } catch (error) {
      console.error('Error al agregar la canción:', error);
    }
  };

  return (
<div>
  <div style={{border: '0px solid #ddd', padding: '15px', margin: '15px'}}>
    <h2>Agregar canción</h2>
    <form onSubmit={handleSubmit} className="form-container">
  <input
    className="form-field"
    type="text"
    placeholder="Título"
    value={newSong.titulo}
    onChange={e => setNewSong({...newSong, titulo: e.target.value})}
  />
  <input
    className="form-field"
    type="text"
    placeholder="Duración"
    value={newSong.duracion}
    onChange={e => setNewSong({...newSong, duracion: e.target.value})}
  />
  <input
    className="form-field"
    type="text"
    placeholder="Género ID"
    value={newSong.genero_id}
    onChange={e => setNewSong({...newSong, genero_id: e.target.value})}
  />
  <input
    className="form-field"
    type="text"
    placeholder="Álbum ID"
    value={newSong.album_id}
    onChange={e => setNewSong({...newSong, album_id: e.target.value})}
  />
  <input
    className="form-field"
    type="text"
    placeholder="Artista ID"
    value={newSong.artista_id}
    onChange={e => setNewSong({...newSong, artista_id: e.target.value})}
  />
        <button type="submit" className="submit-button">Agregar Canción</button>
    </form>
  </div>
  <div>
  <h1>Lista de canciones</h1>
  <div className="song-list">
    {songs.map(song => (
      <div key={song.id} className="song-card">
        <h2><Link to={`/canciones/${song.id}`}>{song.titulo}</Link></h2>
        <p>Artista: {song.Artistum.nombre} {song.Artistum.apellido}</p>
        <p>Álbum: {song.Album.nombre}</p>
        <p>Género: {song.Genero.name}</p>
        <p>Duración: {song.duracion}</p>
      </div>
    ))}
    
  </div>
</div>

    </div>
  );
};

export default SongList;



