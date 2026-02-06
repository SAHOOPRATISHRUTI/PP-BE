const router = require("express").Router();
const ctrl = require("../controllers/photo.controller");
const upload = require("../middleware/upload.middleware");


router.post(
  "/upload",
  upload.array("images", 50),   // ← allow multiple images
  ctrl.uploadMany
);


router.get("/location/:locationId", ctrl.byLocation);

router.delete("/:id", ctrl.remove);

module.exports = router;
