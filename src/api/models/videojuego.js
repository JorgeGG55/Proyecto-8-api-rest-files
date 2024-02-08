const mongoose = require("mongoose");

const videojuegoSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    nombre: { type: String, required: false },
    precio: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: "videojuego",
  }
);

const Videojuego = mongoose.model(
  "videojuegos",
  videojuegoSchema,
  "videojuegos"
);
module.exports = Videojuego;
