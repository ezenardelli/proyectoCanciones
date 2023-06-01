const Sequelize = require('sequelize');
const dbConfig = require('./config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión con base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('No se puede conectar a la base de datos:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.album = require('./models/Album')(sequelize, Sequelize);
db.artista = require('./models/Artista')(sequelize, Sequelize);
db.cancion = require('./models/Cancion')(sequelize, Sequelize);
db.genero = require('./models/Genero')(sequelize, Sequelize);

// Se establecen las relaciones
db.album.hasMany(db.cancion, {foreignKey: 'album_id'});
db.artista.hasMany(db.cancion, {foreignKey: 'artista_id'});
db.genero.hasMany(db.cancion, {foreignKey: 'genero_id'});

db.cancion.belongsTo(db.album, {foreignKey: 'album_id'});
db.cancion.belongsTo(db.artista, {foreignKey: 'artista_id'});
db.cancion.belongsTo(db.genero, {foreignKey: 'genero_id'});

module.exports = db;

