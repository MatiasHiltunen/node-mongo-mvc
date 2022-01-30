import express from "express";
import router from "./router.js";
import { errorPage } from "./views/templates/errorPage.js";
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
app.use(express.urlencoded())
app.use(router);

app.use((err, req, res, next) => {
    const error = err.toString()
    res.send(errorPage(error))
})

app.listen(5000);

console.log("Server is running on port 5000")