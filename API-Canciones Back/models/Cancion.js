module.exports = (sequelize, DataTypes) => {
    const Cancion = sequelize.define('Cancion', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
      },
      duracion: {
        type: DataTypes.FLOAT,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      genero_id: {
        type: DataTypes.INTEGER,
      },
      album_id: {
        type: DataTypes.INTEGER,
      },
      artista_id: {
        type: DataTypes.INTEGER,
      },
    }, {
      tableName: 'canciones',
      timestamps: false
    });
  
    return Cancion;
  };
  
