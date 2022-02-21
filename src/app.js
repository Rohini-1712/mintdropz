const express = require('express');
const app = express();
const PORT = "7000";

const bcrypt = require('bcryptjs');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require("fs");
const multer = require("multer");

require("./db/conn");
const POST = require("./models/userschema");

console.log((path.join(__dirname, "../views")));
const staticPath = path.join(__dirname, "../views");

app.use(express.json());
app.use(bodyParser.urlencoded(
    { extended: true }
))

app.use(express.static(staticPath));
app.set("view engine", "ejs");
app.set("views ", staticPath);



app.get("/", (req, res) => {
    res.send("hello");
})

app.get("/login", (req, res) => {
    res.render("index")
});

app.post("/login", async (req, res) => {
    try {
            const result = await new POST({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
        //   user.password = await bcrypt.hash(user.password, 10);
        //   user.save()
        // const result = await new POST(req.body);
        result.password = await bcrypt.hash(result.password, 10);
        result.save();
        if (result) {
            res.status(200).send({ msg: "success", data: result });
        }
        res.status(404).send({ msg: "No data found", data: [] });
    } catch (e) {
        console.log(e);
    }
})


app.listen(PORT, () => {
    console.log(`connection is live at port ${PORT}`);
})