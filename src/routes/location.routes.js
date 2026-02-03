const router = require("express").Router();
const ctrl = require("../controllers/location.controller");

// Location CRUD
router.post("/", ctrl.create);       // Create
router.get("/", ctrl.getAll);        // Read all
router.get("/:id", ctrl.getOne);     // Read one
router.put("/:id", ctrl.update);     // Update
router.delete("/:id", ctrl.remove);  // Delete

module.exports = router;
