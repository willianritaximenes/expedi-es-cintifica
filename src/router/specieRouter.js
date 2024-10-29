import { Router } from "express";
import specieController from "../controllers/specieController.js";

const router = Router();

router.post("/", specieController.store);
router.get("/", specieController.index);
router.get("/:id", specieController.show);
router.put("/:id", specieController.update);
router.delete("/:id", specieController.destroy);

export default router;