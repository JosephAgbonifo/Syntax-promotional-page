/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementsByClassName("control-me")[0].style.width = "0%";
    document.getElementsByClassName("menu-icon")[0].style.display = "block";
  }
  function openNav() {
    document.getElementsByClassName("control-me")[0].style.width = "50%";
    document.getElementsByClassName("menu-icon")[0].style.display = "none";
  }

const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 1,
  rootMargin: "0px 0px 0px 0px"
};


const appearOnScroll = new  IntersectionObserver( function(entries,appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, options)

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})