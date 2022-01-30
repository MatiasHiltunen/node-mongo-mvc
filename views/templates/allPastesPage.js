import { defaultTemplate } from "./defaultPage.js"
import { template } from "../../tools/templateEngine.js"

export const allPastesTemplate = (pasteItems) => {

    const items = pasteItems.map(item => template('pasteItem', item)).join('')

    return defaultTemplate({
        content: template('pasteContent', { items })
    })
}