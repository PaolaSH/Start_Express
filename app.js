const express = require("express");
 

const app = express ()

//confing express
app.use(express.json())
app.use (express.urlencoded({extended: true}))
app.get("/", (req, res) => {

    res.send ("todo uwu")
})
module.exports = app