import { defaultTemplate } from '../templates/defaultPage.js'


export const errorPage = (text) => defaultTemplate({
    content: `<h2>${text}</h2>`
})