import { defaultTemplate } from "../../tools/templateEngine.js"

export const errorPage = (text) => defaultTemplate({
    content: `<h2>${text}</h2>`
})