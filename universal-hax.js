// Site-specific Configuration settings
window.bigcookie = null;
window.upgrades = null;
if(window.location.href.includes("stimulation")) {
  bigcookie = document.getElementsByClassName("main-btn")[0];
  upgrades = document.getElementsByClassName("main-upgrades")[0];
}

function hacks() {
  setInterval(
    function() {
      for(let i = 0; i < 50; i++) {
        bigcookie.click();
      } 
      for(let upgrade of upgrades.children) {
        upgrade.click();
      }
    },
  100);
} 
