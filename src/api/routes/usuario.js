const uploadUsuarios = require("../../middlewares/usuariosFile");
const {
  getUsuarios,
  getUsuarioById,
  postUsuario,
  deleteUsuario,
} = require("../controllers/usuario");
const usuariosRouter = require("express").Router();

usuariosRouter.get("/", getUsuarios);
usuariosRouter.get("/:id", getUsuarioById);
usuariosRouter.post(
  "/",
  uploadUsuarios.fields([{ name: "avatar" }]),
  postUsuario
);
usuariosRouter.delete("/:id", deleteUsuario);

module.exports = usuariosRouter;
