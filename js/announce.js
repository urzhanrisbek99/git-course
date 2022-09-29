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

var all = document.getElementsByClassName("category_options")[0];
var head = document.getElementsByClassName("category_options1")[0];
var member = document.getElementsByClassName("category_options2")[0];

var main = document.querySelector("#head2");
var main1 = document.querySelector("#head1");
var student = document.querySelector("#member");
all.onclick = function () {
  student.style.display = "block";
  main.style.display = "block";
  main1.style.display = "block";
};

head.onclick = function () {
  student.style.display = "none";
  main.style.display = "block";
  main1.style.display = "block";
};
member.onclick = function () {
  student.style.display = "block";
  main.style.display = "none";
  main1.style.display = "none";
};
