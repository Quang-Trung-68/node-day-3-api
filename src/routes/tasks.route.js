const express = require("express");
const router = express.Router();

const taskController = require("@/controllers/task.controller");

router.get("/", taskController.getAllTask);
router.get("/:id", taskController.getTask);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.destroy);

module.exports = router;
