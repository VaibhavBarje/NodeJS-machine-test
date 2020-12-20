const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("./db/conn");
const create_Product = require("./models/Product_Schema");
var listItems = create_Product.find({});

const { json } = require("express");

const port = process.env.port || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const Partial_path = path.join(__dirname, "../templates/partials");

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
app.get("/createProduct", (req, res) => {
    res.render("createProduct");
})

app.get("/createCategory", (req, res) => {
    res.render("createCategory");
})

app.get("/product_List", (req, res,) => {
    listItems.exec(function (err, data) {
        if (err) throw err;
        res.render("product_List", { records: data });
    });
})


// create a new user in our database

app.post("/createProduct", async (req, res) => {
    try {
        const categoryId = req.body.categoryId;
        const categoryName = req.body.categoryName;
        const productId = req.body.productId;
        const productName = req.body.productName
        if ({} != null) {
            const createpro = new create_Product({
                categoryId: req.body.categoryId,
                categoryName: req.body.categoryName,
                productId: req.body.productId,
                productName: req.body.productName
            })
            const Userpro = await createpro.save();
            res.status(201).render("index");
        } else {
            res.send("pleace input valid value");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log("server is running port no 3000");
})