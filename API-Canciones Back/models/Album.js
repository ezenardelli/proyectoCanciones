module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    duracion: {
      type: DataTypes.FLOAT,
    },
  }, {
    tableName: 'albumes',
    timestamps: false
  });

  return Album;
};
