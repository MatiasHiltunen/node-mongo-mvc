import { template } from "../tools/templateEngine.js";
import { defaultTemplate } from "../views/templates/defaultPage.js";
import { allPastesTemplate } from "../views/templates/allPastesPage.js";
import { singlePastePageTemplate } from "../views/templates/singlePastePage.js";
import Paste from "../models/paste.js";
import hljs from 'highlight.js'

async function allPastesView(req, res, next) {
    try {
        const pasteItems = await Paste.find({});
        if (!pasteItems) return res.status(404).send();

        res.send(allPastesTemplate(pasteItems));
    } catch (e) {
        next(e);
    }
}

async function onePasteByIdView(req, res, next) {
    if (!req.params.id) return res.status(400).send();
    try {
        const paste = await Paste.findById(req.params.id);
        if (!paste) return res.status(404).send();

        res.send(singlePastePageTemplate(paste));
    } catch (e) {
        next(e);
    }
}


async function pasteCreateView(req, res, next) {
    const html = defaultTemplate({ content: template('pasteCreate') })
    res.send(html);
}

async function createNewPaste(req, res, next) {
    try {

        const { title, description, body } = req.body

        if (!title || !description || !body) return next('Kaikki kentät tulee täyttää')

        const paste = new Paste({
            title: title,
            description: description,
            body: hljs.highlightAuto(body).value
        });

        const data = await paste.save();
        if (!data) return res.status(500).send()

        res.send(singlePastePageTemplate(data));

    } catch (e) {
        next(e)
    }

}


async function deletePaste(req, res, next) {
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
    allPastesView,
    onePasteByIdView,
    createNewPaste,
    pasteCreateView,
    deletePaste
}