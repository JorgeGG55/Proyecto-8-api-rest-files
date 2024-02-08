const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const consolasStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "consolas",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
});

const uploadConsolas = multer({ storage: consolasStorage });
module.exports = uploadConsolas;
