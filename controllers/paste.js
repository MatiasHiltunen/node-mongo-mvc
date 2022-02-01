import { defaultTemplate } from "../tools/templateEngine.js";
import { pasteViewAll } from "../views/pasteViewAll/pasteViewAll.js";
import { pasteViewSingle } from "../views/pasteViewSingle/pasteViewSingle.js";
import { pasteCreate } from "../views/pasteCreate/pasteCreate.js";
import Paste from "../models/paste.js";
import hljs from 'highlight.js'

const getAllPastes = async(req, res, next) => {
    try {
        const pasteItems = await Paste.find({});
        if (!pasteItems) return res.status(404).send();

        res.send(pasteViewAll(pasteItems));
    } catch (e) {
        next(e);
    }
}

const getPaste = async(req, res, next) => {
    if (!req.params.id) return res.status(400).send();
    try {
        const paste = await Paste.findById(req.params.id);
        if (!paste) return res.status(404).send();

        res.send(pasteViewSingle(paste));
    } catch (e) {
        next(e);
    }
}


const getCreateNewPaste = (req, res, next) => {
    res.send(pasteCreate);
}

const postCreateNewPaste = async(req, res, next) => {
    try {

        const { title, description, body } = req.body

        if (!title || !description || !body) return next('Kaikki kentät tulee täyttää')

        const paste = new Paste({
            title,
            description,
            body: hljs.highlightAuto(body).value
        });

        const data = await paste.save();
        if (!data) return res.status(500).send()

        res.send(pasteViewSingle(data));

    } catch (e) {
        next(e)
    }
}

const deletePaste = async(req, res, next) => {
    if (!req.params.id) return res.status(400).send();
    try {
        const paste = await Paste.findById(req.params.id);
        if (!paste) return res.status(404).send();
        await paste.delete();

        res.send(defaultTemplate({
            content: `<h2>Poisto onnistui</h2><small>`
        }))
    } catch (e) {
        next(e);
    }
}

export default {
    getPaste,
    getAllPastes,
    getCreateNewPaste,
    postCreateNewPaste,
    deletePaste
}