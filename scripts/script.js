/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementsByClassName("control-me")[0].style.width = "0%";
    document.getElementsByClassName("menu-icon")[0].style.display = "block";
  }
  function openNav() {
    document.getElementsByClassName("control-me")[0].style.width = "50%";
    document.getElementsByClassName("menu-icon")[0].style.display = "none";
  }