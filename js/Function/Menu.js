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

//Function
export function OpenMenuHum(){
    // This is Close Menu
    if(El.x==0){
     El.menuHum.style.transition="1s";
    //  El.ListmenuHum.style.display="none";
     El.menuHum.className="bi bi-list MenuHmb";
     El.ListmenuHum.style.top="-260px";
        El.x=1;
        return El.x;
    }
    //This is Open Menu
    else if(El.x==1){
        El.menuHum.style.transition="1s";
        // El.ListmenuHum.style.display="block";
        El.ListmenuHum.style.top="80px";
        El.menuHum.className="bi bi-x-lg MenuHmb";
        El.x=0
        return El.x;
    }
};
//The method Night Mod
export function NightMod(){
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
//The method PreventDefault();
export function Pre(e){
    e.preventDefault();
}

