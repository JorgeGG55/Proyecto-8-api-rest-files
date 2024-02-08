const upload = require("../../middlewares/videojuegosFile");
const {
  getVideojuegos,
  getVideojuegoById,
  postVideojuego,
  deleteVideojuego,
} = require("../controllers/videojuego");
const videojuegosRouter = require("express").Router();

videojuegosRouter.get("/", getVideojuegos);
videojuegosRouter.get("/:id", getVideojuegoById);
videojuegosRouter.post("/", upload.fields([{ name: "img" }]), postVideojuego);
videojuegosRouter.delete("/:id", deleteVideojuego);

module.exports = videojuegosRouter;
