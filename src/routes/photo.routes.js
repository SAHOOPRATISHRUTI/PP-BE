const router = require("express").Router();
const ctrl = require("../controllers/photo.controller");
const upload = require("../middleware/upload.middleware");

router.post("/upload", upload.single("image"), ctrl.upload);

router.get("/location/:locationId", ctrl.byLocation);

router.delete("/:id", ctrl.remove);

module.exports = router;
