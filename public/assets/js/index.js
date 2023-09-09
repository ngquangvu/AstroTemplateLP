var btnMenu = document.getElementById("menuBtn");
var navMenu = document.getElementById("menu");
var sectionD = document.getElementById("sectionDWrapper");
var btnSticky = document.getElementById("buttonSticky");

function navToggle() {
  btnMenu?.classList.toggle("open");
  navMenu?.classList.toggle("block");
  navMenu?.classList.toggle("!left-0");
}

function navLinkClick(href) {
  if (btnMenu?.classList.contains("open")) {
    navToggle();
  }
  document.location.href = href;
}

function btnStickyClick(href) {
  navLinkClick(href);
}

window.addEventListener("scroll", function () {
  if (
    window.scrollY >
      sectionD.offsetTop + sectionD.offsetHeight - sectionD.clientHeight &&
    window.scrollY <
      sectionD.offsetTop + sectionD.offsetHeight + sectionD.clientHeight - 200
  ) {
    btnSticky?.classList.add("!opacity-0");
  } else {
    btnSticky?.classList.remove("!opacity-0");
  }
});
