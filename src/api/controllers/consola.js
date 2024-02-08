const { deleteFile } = require("../../utils/deleteFile");
const Consola = require("../models/consola");

const getConsolas = async (req, res, next) => {
  try {
    const consola = await Consola.find();
    return res.status(200).json(consola);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getConsolaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consola = await Consola.findById(id);
    if (!consola) {
      return res.status(404).json({ mensaje: "Consola no encontrado" });
    }
    return res.status(200).json(consola);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postConsola = async (req, res, next) => {
  try {
    const newConsola = new Consola(req.body);
    if (req.files) {
      newConsola.consolaImg = req.files.consolaImg[0].path;
    }
    const consolaSaved = await newConsola.save();
    return res.status(201).json(consolaSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const deleteConsola = async (req, res, next) => {
  try {
    const { id } = req.params;
    const consolaDeleted = await Consola.findByIdAndDelete(id);
    deleteFile(consolaDeleted.consolaImg);
    return res.status(200).json({
      mensaje: "Consola eliminada",
      consolaDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getConsolas, getConsolaById, postConsola, deleteConsola };
