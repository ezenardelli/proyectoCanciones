const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const canciones = await db.cancion.findAll({
      include: [
        db.artista,
        db.album,
        {
          model: db.genero,
          attributes: ["name"],
        },
      ],
    });
    return res.status(200).json(canciones);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const cancion = await db.cancion.create(req.body);
    return res.status(201).json(cancion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cancion = await db.cancion.findOne({
      where: { id: id },
      include: [db.artista, db.album, db.genero],
    });
    if (cancion) {
      return res.status(200).json(cancion);
    }
    return res
      .status(404)
      .send("No se encuentra cancion con ese ID");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.cancion.destroy({
      where: { id: id },
    });
    if (deleted) {
      return res.status(204).send("Canción eliminada");
    }
    throw new Error("Canción no encontrada");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
