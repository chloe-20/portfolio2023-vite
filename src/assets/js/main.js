import { menu } from "./menu.js";
import { portfolio } from "./portfolio.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    portfolio();
});