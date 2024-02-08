const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    avatar: { type: String, required: true },
    nombre: { type: String, required: false },
    email: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("usuarios", usuarioSchema, "usuarios");
module.exports = Usuario;
