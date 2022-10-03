var all = document.querySelector(".myclub_item");
var news = document.querySelector(".club_container");
var mems = document.getElementsByClassName("club_info")[0];
all.onclick = function () {
  news.style.display = "none";
  mems.style.display = "block";
};
var list = document.querySelector(".memlist_btn");
var showList = document.querySelector(".club_membership");

list.onclick = function () {
  if (showList.style.display === "block") {
    showList.style.display = "none";
  } else {
    showList.style.display = "block";
  }
};
var memRequest = document.querySelector(".quit_btn");
var cancelRequest = document.getElementById("req_cancel");
var submitRequest = document.getElementById("req_submit");
var popRequest = document.getElementsByClassName("req_pop")[0];
memRequest.onclick = function () {
  popRequest.style.display = "block";
};
cancelRequest.onclick = function () {
  popRequest.style.display = "none";
};
submitRequest.onclick = function () {
  popRequest.style.display = "none";
};
