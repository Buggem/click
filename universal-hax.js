// Site-specific Configuration settings
window.clickerHaxCPS = 50;
window.bigcookie = null;
window.upgrades = null;
window.haxInterval = -1;

if(window.location.href.includes("stimulation")) {
  window.bigcookie = document.getElementsByClassName("main-btn")[0];
  window.upgrades = document.getElementsByClassName("main-upgrades")[0];
}

function toggleClickerHax() {
  if(window.haxInterval == -1) {
    window.haxInterval = setInterval(
      function() {
        for(let i = 0; i < window.clickerHaxCPS; i++) {
          window.bigcookie.click();
        } 
        for(let upgrade of window.upgrades.children) {
          upgrade.click();
        }
      },
    100);
  } else {
    clearInterval(window.haxInterval);
    haxInterval = -1;
  }
} 
