var sprankle = document.querySelector(".sprankles");
var ti = document.querySelector(".top-interface");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
setInterval(function(){
        var sprank = document.createElement("img");
        sprank.src = "https://img.icons8.com/ios-filled/480/1e90ff/winter.png";
        sprank.classList.add("sprankles");
        sprank.style.left = getRandomInt(97) + "%";
        ti.appendChild(sprank); 
        setInterval(function (){
            ti.removeChild(sprank);
        },7000);
},900);