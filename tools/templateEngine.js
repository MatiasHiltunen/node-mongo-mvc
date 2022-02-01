import { readFileSync } from 'fs'

const regExp = new RegExp(/\{{(.*?)\}}/, 'g')

export const template = (templateName, vars) => {

    let html = readFileSync(`./views/${templateName}/${templateName}.html`, 'utf-8')

    const matches = html.match(regExp)
    if (!matches) return html

    for (let match of matches) {

        let key = match
            .slice(2, -2)
            .trim()

        if (key in vars) {
            html = html.replaceAll(match, vars[key])
        }
    }

    return html
}

export const defaultTemplate = ({ content = '' }) => {
    return template('index', { content })
}