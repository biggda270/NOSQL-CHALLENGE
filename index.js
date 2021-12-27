const express = require("express");
const { Mongoose } = require("mongoose");
const routes = require("./routes");

const app = express()

app.listen(5000, () => {
    console.log("server is running on port 5000");
})


Mongoose
    .connect("mongodb://localhost:27017/test", {useNewUrlParser: true})
    .then(() => {
        const app = express();

        app.listen(5000, () => {
            console.log("server is running on port 5000");
        })