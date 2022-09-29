const imgDiv = document.querySelector(".avatar_change");
const img = document.querySelector("#avatar");
const file = document.querySelector("#photo_file");
const uploadBtn = document.querySelector("#uploadBtn");
imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});
imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

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

var edit = document.getElementById("profile_edit");
var basic = document.getElementById("basic_edit");
var add = document.getElementById("add_edit");
var profile = document.getElementsByClassName("profile_container")[0];
var profile_change = document.getElementsByClassName("edit_container")[0];

edit.onclick = function () {
  profile.style.display = "none";
  profile_change.style.display = "block";
};
basic.onclick = function () {
  profile.style.display = "none";
  profile_change.style.display = "block";
};
add.onclick = function () {
  profile.style.display = "none";
  profile_change.style.display = "block";
};
// cancel.onclick = function () {
//   profile.style.display = "block";
//   profile_change.style.display = "none";
// };
