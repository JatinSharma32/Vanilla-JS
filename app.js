let a = document.getElementsByClassName("inp");
console.log(a);
let btn = document.getElementById("add");
let box = document.getElementById("cont");
let counter = 0;
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
  if (count == 1) {
    alert("Please fill the form completely!");
  }
  if (count == 0) {
    counter++;
    a[0].style.borderColor = "#727070";
    a[1].style.borderColor = "#727070";
    a[2].style.borderColor = "#727070";
    let newRecord = document.createElement("div");
    newRecord.innerHTML = `
    <div class="record">
    <img src="${a[1].value}" alt="" width="50px" height="60px" />
              <div id="text">
                <p>Name: <span>${a[0].value}</span></p>
                <p>
                About:
                <span
                >${a[2].value}</span
                >
                </p>
                </div>
                </div>
                <div id="delete"></div>`;
    newRecord.classList.add("big_cont");
    newRecord.setAttribute("counter", `${counter}`);
    box.appendChild(newRecord);
    a[0].value = "";
    a[1].value = "";
    a[2].value = "";

    newRecord.children[0].children[0].addEventListener("mouseover", () => {
      newRecord.lastChild.style.width = "10%";
      newRecord.children[0].style.width = "80%";
      newRecord.lastChild.style.padding = "5px 5px 5px 3px";
      setTimeout(() => {
        newRecord.lastChild.innerText = "Delete";
      }, 700);
      console.log(newRecord.children[0]);
    });

    newRecord.children[0].children[0].addEventListener("click", () => {
      console.log(newRecord.children[0]);
      newRecord.lastChild.innerText = "";
      newRecord.lastChild.style.width = "0%";
      newRecord.children[0].style.width = "90%";
      newRecord.lastChild.style.padding = "0px";
    });
    newRecord.lastChild.addEventListener("click", () => {
      newRecord.remove();
    });
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
