//The Varibel
var El={
    Body:document.querySelector("body"),
    menuHum:document.getElementById("menu"),
    ListmenuHum:document.getElementById("ListMenuHum"),
    Moon:document.getElementById("Moon"),
    Icon:document.querySelector("#Moon>i"),
    x:0,
    M:0

}
console.log(El.ListmenuHum);
console.log(El.menuHum);
//Function
function OpenMenuHum(){
    if(El.x==0){
     El.menuHum.style.transition="1s";
     El.ListmenuHum.style.display="none";
     El.menuHum.className="bi bi-list MenuHmb";
        El.x=1;
        return El.x;
    }
    else if(El.x==1){
        El.menuHum.style.transition="1s";
        El.ListmenuHum.style.display="block";
        El.x=0
        El.menuHum.className="bi bi-x-lg MenuHmb";
        return El.x;
    }
};
function NightMod(){
    if(El.M==0){
        El.Body.style.background="var(--Darkblue)";
        El.Icon.className="bi bi-moon";
        El.M=1;
        return El.M;
  
        
    }
    else if(El.M==1){
        El.Body.style.background="#fff";
        El.Icon.className="bi bi-brightness-high";
        El.M=0;
        return El.M;

    }
}
//Event
El.menuHum.addEventListener("click",OpenMenuHum);
El.Moon.addEventListener("click",NightMod);