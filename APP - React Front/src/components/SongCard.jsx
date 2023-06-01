import React from 'react';

const SongCard = ({ song, onDelete }) => {
  const handleDelete = () => {
    onDelete(song.id);
  };

  return (
    <div>
      <h2>{song.titulo}</h2>
      <p>{song.Artistum.nombre} {song.Artistum.apellido}</p>
      <p>{song.Album.nombre}</p>
      <button onClick={handleDelete}>Eliminar canción</button>
    </div>
  );
};

export default SongCard;
