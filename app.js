let a = document.getElementsByClassName("inp");
console.log(a);
let btn = document.getElementById("add");
let box = document.getElementById("cont");

btn.addEventListener("click", () => {
  let count = 0;
  if (a[0].value == "") {
    count = 1;
    a[0].style.borderColor = "red";
  } else {
    a[0].style.borderColor = "#727070";
  }
  if (a[1].value == "") {
    count = 1;
    a[1].style.borderColor = "red";
  } else {
    a[1].style.borderColor = "#727070";
  }
  if (a[2].value == "") {
    count = 1;
    a[2].style.borderColor = "red";
  } else {
    a[2].style.borderColor = "#727070";
  }
  if (a[2].value.length > 212) {
    a[2].value = a[2].value.slice(1, 210);
    a[2].value = a[2].value.concat("...");
  }
  // console.log(e.target.files);
  if (count == 0) {
    a[0].style.borderColor = "#727070";
    a[1].style.borderColor = "#727070";
    a[2].style.borderColor = "#727070";
    let newRecord = document.createElement("div");
    newRecord.innerHTML = `<img src="${a[1].value}" alt="User Image" width="50px" height="60px" />
    <div id="text">
    <p>Name: <span>${a[0].value}</span></p>
    <p>
    About:
    <span
    >${a[2].value}</span
    >
    </p>
    </div>`;
    newRecord.classList.add("record");
    box.appendChild(newRecord);
    a[0].value = "";
    a[1].value = "";
    a[2].value = "";
  }
});

let body = document.getElementById("body");
let helpBox = document.getElementById("he");
let help = document.getElementById("help");
help.addEventListener("click", () => {
  if (help.getAttribute("checker") == "off") {
    helpBox.style.display = "flex";
    help.setAttribute("checker", "on");
    help.textContent = "X";
  } else {
    helpBox.style.display = "none";
    help.textContent = "?";
    help.setAttribute("checker", "off");
  }
});
