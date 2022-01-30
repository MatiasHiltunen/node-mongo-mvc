import { template } from "../../tools/templateEngine.js"

export function defaultTemplate({ content = '' }) {
    return template('index', { content })
}