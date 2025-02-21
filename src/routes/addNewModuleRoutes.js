const express = require("express");
const router = express.Router();

const addNewModuleController = require("../controllers/addNewModuleController");

// POST CALL to upload module
router.post("/", addNewModuleController.createNewModule);

// GET CALL to fetch data
router.get("/", addNewModuleController.getModuleData);

// DELETE CALL to delete module
router.delete("/:id", addNewModuleController.deleteModule);
// GET CALL to fetch data by ID
router.get("/:id", addNewModuleController.getModuleDataByID);
router.put("/:id", addNewModuleController.updateModuleDataByID);
router.get("/get/moduleCode",addNewModuleController.getAllModuleCodes)
router.get("/get/module/topic/:moduleCode",addNewModuleController.getTopicCodesByModuleCode)
router.get('/get/module/topic/subtopic/:moduleCode/:topicCode',addNewModuleController.getSubtopicCodesByModuleAndTopicCode)
router.delete("/softDelete/:id",addNewModuleController.softDeleteModule)
module.exports = router;
