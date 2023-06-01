import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SongDetails = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/canciones/${id}`)
      .then(response => response.json())
      .then(data => setSong(data))
      .catch(err => console.error(err));
  }, [id]);

  const deleteSong = () => {
    fetch(`http://localhost:3000/canciones/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        alert('Canción eliminada con éxito');
        navigate('/canciones');
      } else {
        throw new Error('Error al eliminar la canción');
      }
    })
    .catch(error => alert(error.message));
  };

  if (!song) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{border: '1px solid #ddd', padding: '15px', margin: '15px'}}>
      <h1>Detalles de la canción {song.titulo}</h1>
      <p>Artista: {song.Artistum.nombre} {song.Artistum.apellido}</p>
      <p>Álbum: {song.Album.nombre}</p>
      <p>Género: {song.Genero.name}</p>
      <p>Duración: {song.duracion}</p>
      <button onClick={deleteSong}>Eliminar</button>
    </div>
  );
};

export default SongDetails;
