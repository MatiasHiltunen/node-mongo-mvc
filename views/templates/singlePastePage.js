import { defaultTemplate } from "./defaultPage.js"
import { template } from "../../tools/templateEngine.js"

export const singlePastePageTemplate = (paste) => defaultTemplate({
    content: template('pasteItem', paste),
})