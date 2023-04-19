document.getElementById("bigCookie").addEventListener("click", function() {
setInterval(function(){for(let i = 0; i < 19; i++){Game.Earn(Infinity); document.getElementById("product" + i).click();} Game.Earn(Infinity); document.getElementById("upgrade0").click();}, 100)
});
