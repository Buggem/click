// Site-specific Configuration settings (default is for cookieclickerhax)
window.clickerHaxCPS = 50;
window.bigcookie = document.getElementById("bigCookie");
window.upgrades = document.getElementById("products");
window.upgradesOffset = 1;
window.haxInterval = -1;
window.haxComboAttempt = 0;
window.haxComboKeys = ["ControlLeft", "ShiftLeft", "KeyH"];




window.addEventListener("keydown", function (e) {
  if(e.code == window.haxComboKeys[haxComboAttempt])
    window.haxComboAttempt++;
  else {
    window.haxComboAttempt = 0;
  }
  if( ( window.haxComboAttempt ) == window.haxComboKeys.length ) {
    console.log("hax toggled :)");
    toggleClickerHax();
  }
});



if(window.location.href.includes("stimulation")) {
  window.upgradesOffset = 0;
  window.bigcookie = document.getElementsByClassName("main-btn")[0];
  window.upgrades = document.getElementsByClassName("main-upgrades")[0];
}

window.toggleClickerHax = function() {
  if(window.haxInterval == -1) {
    window.haxInterval = setInterval(
      function() {
        for(let i = 0; i < window.clickerHaxCPS; i++) {
          window.bigcookie.click();
        } 
        for(let i = window.upgradesOffset; i < window.upgrades.children.length; i++) {
          window.upgrades.children[i].click();
        }
      },
    100);
  } else {
    clearInterval(window.haxInterval);
    haxInterval = -1;
  }
}




