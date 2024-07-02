"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const data_1 = __importDefault(require("@data/controller/data"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// tampilan home
app.get("/", (req, res) => {
    res.render('index', { title: "This Is Template Engine" });
});
app.get("/test", data_1.default);
app.listen(3000, () => {
    console.log("express Running");
});
