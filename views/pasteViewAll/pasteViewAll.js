import { template, defaultTemplate } from "../../tools/templateEngine.js"

export const pasteViewAll = (pasteItems) => {

    const items = pasteItems.map(item => template('pasteViewSingle', item)).join('')

    return defaultTemplate({
        content: template('pasteViewAll', { items })
    })
}