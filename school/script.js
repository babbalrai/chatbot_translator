var theme = document.querySelector("#theme");
var main = document.querySelector("main");
var modal = document.querySelector("#modal");
var modaltext = document.querySelector("#thememodal");
var learnmore = document.querySelector("#learnmore");
var maintext = document.querySelector("#maintext");
theme.textContent = "LIGHT";
var flag = 0; 
theme.addEventListener("click",function(){
    if(flag===0){
        main.style.backgroundColor = "black";
        main.style.color ="white";
        maintext.style.color ="white";
        theme.textContent = "DARK";
        modal.style.top = "15%";
        modal.style.boxShadow = "0px 0px 10px 800px rgba(255, 255, 255, 0.377)";
        modaltext.textContent = "WELCOME TO DARK THEME";
        flag = 1;
    }else if(flag===1){
        main.style.backgroundColor = "white";
        theme.textContent = "LIGHT";
        maintext.style.color ="black";
        modal.style.top = "15%";
        modal.style.boxShadow = "0px 0px 10px 800px rgba(0, 0, 0, 0.521)";
        main.style.color = "black";
        modaltext.textContent = "WELCOME TO LIGHT THEME";
        flag = 0;
    }
});
modal.addEventListener("click", function(){
    modal.style.top = "-200%";
    modal.style.boxShadow = "initial";
})
var pera = document.querySelector("#pera");
var flagp = 0;
learnmore.addEventListener("click",function(){
    if(flagp===0){
        pera.style.height = "initial";
        flagp = 1;
    }
    else{
        pera.style.height = "46px";
        flagp = 0;
    }
})
var chat = document.querySelector("#chat");
var chat2 = document.querySelector("#fulchat");
chat.addEventListener("click",function(){
    chat2.style.top = "0%";
})
var clos = document.querySelector("#close");
clos.addEventListener("click",function(){
    chat2.style.top = "-200%"
})