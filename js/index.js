// import {OpenMenuHum} from './Function/Menu'
import { OpenMenuHum,NightMod,Pre } from "./Function/Menu.js";


//The Varibel
var El={
    Body:document.querySelector("body"),
    menuHum:document.getElementById("menu"),
    ListmenuHum:document.getElementById("ListMenuHum"),
    Moon:document.getElementById("Moon"),
    Icon:document.querySelector("#Moon>i"),
    BtnsPre:document.querySelectorAll(".BtnsPre"),
    x:0,
    M:0

}
//Event
El.menuHum.addEventListener("click",OpenMenuHum);
El.Moon.addEventListener("click",NightMod);
El.BtnsPre.forEach(element => {
    element.addEventListener("click",Pre);
});
