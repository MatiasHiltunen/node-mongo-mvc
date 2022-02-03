import { defaultTemplate } from "../index/default.js"

export const errorPage = (text) => defaultTemplate({
    content: `<h2>${text}</h2>`
})