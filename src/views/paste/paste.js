import { template } from "../../tools/templateEngine.js"
import { defaultTemplate } from "../index/default.js"

const pasteCreate = defaultTemplate({ content: template('paste/pasteCreate') })

const pasteViewSingle = (paste) => defaultTemplate({
    content: template('paste/pasteViewSingle', paste),
})

const pasteViewAll = (pasteItems) => {

    const items = pasteItems.map((item) => {
        return template('paste/pasteViewSingle', item)
    }).join('')

    return defaultTemplate({
        content: template('paste/pasteViewAll', { items })
    })
}

export {
    pasteCreate,
    pasteViewSingle,
    pasteViewAll
}