import { readFileSync } from 'fs'

const regExp = new RegExp(/\{{(.*?)\}}/, 'g')

export const template = (templateViewPath, vars) => {

    let html = readFileSync(`./src/views/${templateViewPath}.html`, 'utf-8')

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