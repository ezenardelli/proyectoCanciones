const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db.js');
const cancionesRoutes = require('./routes/cancionesRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escuchando el puerto ${port}.`));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/canciones', cancionesRoutes);

db.sequelize.sync();
