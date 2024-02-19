const createStorage = require("../../middlewares/fileUpload");

const uploadVideojuegos = createStorage("videojuegos");

const {
  getVideojuegos,
  getVideojuegoById,
  postVideojuego,
  deleteVideojuego,
} = require("../controllers/videojuego");
const videojuegosRouter = require("express").Router();

videojuegosRouter.get("/", getVideojuegos);
videojuegosRouter.get("/:id", getVideojuegoById);
videojuegosRouter.post(
  "/",
  uploadVideojuegos.fields([{ name: "img" }]),
  postVideojuego
);
videojuegosRouter.delete("/:id", deleteVideojuego);

module.exports = videojuegosRouter;
