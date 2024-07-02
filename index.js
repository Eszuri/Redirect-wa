import express from "express";
const app = express();


app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render('index', { title: "This Is Template Engine" })
})

app.listen(3000, () => {
    console.log("express Running");
})