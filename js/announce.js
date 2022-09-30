var ann = document.getElementById("ann_container");
var create = document.getElementById("create_container");
var sample = document.getElementsByClassName("create-btn")[0];
sample.onclick = function () {
  ann.style.display = "none";
  create.style.display = "block";
};

ann.onclick = function () {
  sample.style.display = "block";
};

var all = document.querySelectorAll(".category_options")[0];
var head = document.querySelectorAll(".category_options1")[0];
var member = document.querySelectorAll(".category_options2")[0];

var main = document.getElementById("head2");
var main1 = document.getElementById("head1");
var student = document.getElementById("member");
all.onclick = function () {
  main.style.display = "flex";
  main1.style.display = "flex";
  student.style.display = "flex";
};

head.onclick = function () {
  student.style.display = "none";
  main.style.display = "flex";
  main1.style.display = "flex";
};
member.onclick = function () {
  student.style.display = "flex";
  main.style.display = "none";
  main1.style.display = "none";
};
