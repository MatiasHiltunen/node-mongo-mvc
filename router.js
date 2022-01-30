import express from "express";
import PasteController from "./controllers/paste.js";

const router = express.Router();

router.get("/", PasteController.getAllPastes);
router.get("/paste/:id", PasteController.getPaste);
router.get("/paste", PasteController.getCreateNewPaste);
router.post("/paste", PasteController.postCreateNewPaste);
router.get("/delete/:id", PasteController.deletePaste);

export default router;