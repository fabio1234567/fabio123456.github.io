var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "imagens/chost.png"){
        myImage.setAttribute("src","imagens/chost.png");
    }else{
        myImage.setAttribute("src","imagens/chost.png")
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Por favor, digite seu nome.");
    localStorage.setItem("name",myName);
    myHeading.textContent = "PacMan is cool," + myName;
}

if(!localStorage.getItem("name")){
    setUserName();
}else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "PacMan is cool," + storedName;
}

myButton.onclick = function () {
    setUserName();
}