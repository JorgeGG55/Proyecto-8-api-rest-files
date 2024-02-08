const { deleteFile } = require("../../utils/deleteFile");
const Usuario = require("../models/usuario");

const getUsuarios = async (req, res, next) => {
  try {
    const usuario = await Usuario.find();
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getUsuarioById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postUsuario = async (req, res, next) => {
  try {
    const newUsuario = new Usuario(req.body);
    if (req.files) {
      newUsuario.avatar = req.files.avatar[0].path;
    }
    const usuarioSaved = await newUsuario.save();
    return res.status(201).json(usuarioSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuarioDeleted = await Usuario.findByIdAndDelete(id);
    deleteFile(usuarioDeleted.avatar);
    return res.status(200).json({
      mensaje: "Usuario eliminado",
      usuarioDeleted,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { getUsuarios, getUsuarioById, postUsuario, deleteUsuario };
