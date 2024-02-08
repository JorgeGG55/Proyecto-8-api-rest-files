const { deleteFile } = require("../../utils/deleteFile");
const Videojuego = require("../models/videojuego");

const getVideojuegos = async (req, res, next) => {
  try {
    const videojuegos = await Videojuego.find();
    return res.status(200).json(videojuegos);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getVideojuegoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videojuego = await Videojuego.findById(id);
    if (!videojuego) {
      return res.status(404).json({ mensaje: "Videojuego no encontrado" });
    }
    return res.status(200).json(videojuego);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postVideojuego = async (req, res, next) => {
  try {
    const newVideojuego = new Videojuego(req.body);
    if (req.files) {
      newVideojuego.img = req.files.img[0].path;
    }
    const videojuegoSaved = await newVideojuego.save();
    return res.status(201).json(videojuegoSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteVideojuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videojuegoDeleted = await Videojuego.findByIdAndDelete(id);
    deleteFile(videojuegoDeleted.img);
    return res.status(200).json({
      mensaje: "Videojuego eliminado",
      videojuegoDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getVideojuegos,
  getVideojuegoById,
  postVideojuego,
  deleteVideojuego,
};
