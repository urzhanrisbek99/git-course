var edit_mem = document.getElementById("request");
var show_all = document.getElementById("all_new");
var all = document.getElementsByClassName("member_board")[0];
var news = document.getElementsByClassName("member_board1")[0];

edit_mem.onclick = function () {
  all.style.display = "none";
  news.style.display = "block";
};
show_all.onclick = function () {
  news.style.display = "none";
  all.style.display = "block";
};
