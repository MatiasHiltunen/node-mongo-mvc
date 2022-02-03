import { errorPage } from "../views/error/errorPage.js"

export const catchError = (err, req, res, next) => {
    const error = err.toString()
    res.send(errorPage(error))
}