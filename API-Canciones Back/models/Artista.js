module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define('Artista', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'artistas',
    timestamps: false
  });

  return Artista;
};

