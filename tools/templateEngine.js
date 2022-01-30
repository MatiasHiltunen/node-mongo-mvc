import { readFileSync } from 'fs'

const regExp = new RegExp(/\{{(.*?)\}}/, 'g')


export function template(templateName, vars) {

    let html = readFileSync(`./views/html/${templateName}.html`, 'utf-8')

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