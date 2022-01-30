import express from "express";
import PasteController from "./controllers/paste.js";

const router = express.Router();

router.get("/", PasteController.allPastesView);
router.get("/paste", PasteController.pasteCreateView);
router.post("/paste", PasteController.createNewPaste);
router.get("/paste/:id", PasteController.onePasteByIdView);
router.get("/delete/:id", PasteController.deletePaste);

export default router;