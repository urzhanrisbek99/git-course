const ele = document.getElementById("logo");
let pos = { top: 0, left: 0, x: 0, y: 0 };
const mouseDownHandler = function (e) {
  pos = {
    // The current scroll
    left: ele.scrollLeft,
    top: ele.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
};
const mouseMoveHandler = function (e) {
  // How far the mouse has been moved
  const dx = e.clientX - pos.x;
  const dy = e.clientY - pos.y;

  // Scroll the element
  ele.scrollTop = pos.top - dy;
  ele.scrollLeft = pos.left - dx;
};
const mouseUpHandler = function () {
  document.removeEventListener("mousemove", mouseMoveHandler);
  document.removeEventListener("mouseup", mouseUpHandler);

  ele.style.cursor = "grab";
  ele.style.removeProperty("user-select");
};
ele.addEventListener("mousedown", mouseDownHandler);

function hidePassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("show");
  var z = document.getElementById("hide");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}
function hidePassword1() {
  var a = document.getElementById("regpassword");
  var b = document.getElementById("regshow");
  var c = document.getElementById("reghide");

  if (a.type === "password") {
    a.type = "text";
    b.style.display = "block";
    c.style.display = "none";
  } else {
    a.type = "password";
    b.style.display = "none";
    c.style.display = "block";
  }
}

function onClickMenu() {
  document.getElementById("burger-icon").classList.toggle("open");
  document.getElementById("burger-nav").classList.toggle("open");

  document.getElementById("burger-bg").classList.toggle("open-bg");
}

var popup = document.getElementsByClassName("popup")[0];
var login = document.getElementsByClassName("login-pop")[0];
var signup = document.getElementsByClassName("signup-pop")[0];

var loginOpen = document.getElementsByClassName("login-btn")[0];
var signupOpen = document.getElementsByClassName("signup-btn")[0];
var register = document.getElementById("register");
var signin = document.getElementById("signin");
var clubs = document.getElementById("clubs");
var app = document.getElementById("app");
var footer = document.getElementById("footer");

window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = "none";
    clubs.style.display = "block";
    app.style.display = "block";
    footer.style.display = "block";
  }
};

loginOpen.onclick = function () {
  popup.style.display = "block";
  login.style.display = "block";
  signup.style.display = "none";
  clubs.style.display = "none";
  app.style.display = "none";
  footer.style.display = "none";
};
signupOpen.onclick = function () {
  popup.style.display = "block";
  signup.style.display = "block";
  login.style.display = "none";
  clubs.style.display = "none";
  app.style.display = "none";
  footer.style.display = "none";
};
register.onclick = function () {
  login.style.display = "none";
  signup.style.display = "block";
};
signin.onclick = function () {
  login.style.display = "block";
  signup.style.display = "none";
};
