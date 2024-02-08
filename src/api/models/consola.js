const mongoose = require("mongoose");

const consolaSchema = new mongoose.Schema(
  {
    consolaImg: { type: String, required: true },
    nombre: { type: String, required: false },
    precio: { type: String, required: false },
  },
  {
    timestamps: true,
    collection: "consolas",
  }
);

const Consola = mongoose.model("consolas", consolaSchema, "consolas");
module.exports = Consola;
