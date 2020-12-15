const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/newuser");
const { json } = require("express");

const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const Partial_path = path.join(__dirname, "../templates/partials/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(Partial_path);

// set route for page
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/newUser", (req, res) => {
    res.render("newUser");
})



// create a new user in our database

app.post("/newUser", async (req, res) => {
    try {
        const categoryId = req.body.categoryId;
        const categoryName = req.body.categoryName;
        const productId = req.body.productId;
        const productName = req.body.productName;

        if (categoryId && categoryName && productId && productName != null) {
            const createpro = new User({
                categoryId: req.body.categoryId,
                categoryName: req.body.categoryName,
                productId: req.body.productId,
                productName: req.body.productName
            })

            const Userpro = await createpro.save();
            res.status(201).render("index");
        } else {
            res.send("pleace input valid value")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log("server is running port no 3000");
})