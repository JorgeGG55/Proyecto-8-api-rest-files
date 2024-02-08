const uploadConsolas = require("../../middlewares/consolasFile");
const {
  getConsolas,
  getConsolaById,
  postConsola,
  deleteConsola,
} = require("../controllers/consola");
const consolasRouter = require("express").Router();

consolasRouter.get("/", getConsolas);
consolasRouter.get("/:id", getConsolaById);
consolasRouter.post(
  "/",
  uploadConsolas.fields([{ name: "consolaImg" }]),
  postConsola
);
consolasRouter.delete("/:id", deleteConsola);

module.exports = consolasRouter;
