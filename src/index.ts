import express from "express";
import path from "path";
import data from "@/controller/data";
const app = express();
import "module-alias/register"


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// tampilan home
app.get("/", (req, res) => {
    res.render('index', { title: "This Is Template Engine" })
});

app.get("/test", data)



app.listen(3000, () => {
    console.log("express Running");
})