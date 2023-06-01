module.exports = (sequelize, DataTypes) => {
  const Genero = sequelize.define('Genero', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'generos',
    timestamps: false
  });

  return Genero;
};
