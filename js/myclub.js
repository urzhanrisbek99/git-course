var myclub_card = document.querySelector(".me");
var all = document.querySelector(".myclub_container");
var news = document.querySelector(".myclub_info");
var edit_club = document.getElementById("wow");
var change_club = document.getElementsByClassName("myclub_change")[0];
const img = document.querySelector("#zhasa350_edit");
const file = document.querySelector("#myclubphoto_file");
var mems = document.querySelector(".myclub_membership");
var new_cancel = document.getElementById("cancel_change");

myclub_card.onclick = function () {
  all.style.display = "none";
  news.style.display = "block";
};
edit_club.onclick = function () {
  news.style.display = "none";
  change_club.style.display = "block";
};
new_cancel.onclick = function () {
  change_club.style.display = "none";
  all.style.display = "none";
  news.style.display = "block";
};

file.addEventListener("change", function () {
  //this refers to file
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader(); //FileReader is a predefined function of JS

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});
// function mem_lis() {
//   if (mems.style.display === "none") {
//     mems.style.display = "block";
//   } else {
//     mems.style.display = "none";
//   }
// }

var list = document.querySelector(".memlist_btn");
var showList = document.querySelector(".myclub_membership");

list.onclick = function () {
  if (showList.style.display === "block") {
    showList.style.display = "none";
  } else {
    showList.style.display = "block";
  }
};
