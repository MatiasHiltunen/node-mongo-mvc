import { template, defaultTemplate } from "../../tools/templateEngine.js"

export const pasteViewSingle = (paste) => defaultTemplate({
    content: template('pasteViewSingle', paste),
})