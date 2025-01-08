/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementsByClassName("control-me")[0].style.width = "0%";
    document.getElementsByClassName("menu-icon")[0].style.display = "block";
  }
  function openNav() {
    document.getElementsByClassName("control-me")[0].style.width = "50%";
    document.getElementsByClassName("menu-icon")[0].style.display = "none";
  }

  // hero scroll effect
window.addEventListener("scroll", setscrollvar);
function setscrollvar(){
  const htmlElement = document.documentElement;
  const pOfScreenScroll = htmlElement.scrollTop / htmlElement.clientHeight;
  htmlElement.style.setProperty("--scroll", Math.min(pOfScreenScroll * 100, 100));
  console.log(Math.min(pOfScreenScroll * 100, 100))
}

setscrollvar();