import { template } from "../../tools/templateEngine.js"

export const defaultTemplate = ({ content = '' }) => {
    return template('index/index', { content })
}