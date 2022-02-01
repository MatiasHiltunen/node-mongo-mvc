import express from "express";
import router from "./router.js";
import { errorPage } from "./views/errorPage/errorPage.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => {
    console.log(error)
});


const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(router);

app.use((err, req, res, next) => {
    const error = err.toString()
    res.send(errorPage(error))
})

const port = process.env.PORT || 3000
app.listen(port);

console.log("Server is running on http://localhost:" + port)