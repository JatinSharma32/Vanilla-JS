let a = document.getElementsByClassName("inp");
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
    empty.style.display = "none";
    a[0].value = "";
    a[1].value = "";
    a[2].value = "";

    newRecord.children[0].children[0].addEventListener("mouseover", () => {
      newRecord.lastChild.style.width = "15%";
      newRecord.children[0].style.width = "85%";
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
      newRecord.children[0].style.width = "100%";
      newRecord.lastChild.style.padding = "0px";
    });
    newRecord.lastChild.addEventListener("click", () => {
      newRecord.remove();
      if (cont.children.length <= 1) {
        empty.style.display = "block";
      }
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

// Search feature
Search.addEventListener("click", () => {
  if (Search.innerText == "Search") {
    Search.innerText = "Back to Records";
    let nm = a[0].value.toLowerCase();
    let desc = a[2].value.toLowerCase();
    let cker = 0;
    for (let i = 1; i < cont.children.length; i++) {
      let chk = false,
        chk2 = false;
      if (
        cont.children[
          i
        ].children[0].children[1].children[0].children[0].innerText
          .toLowerCase()
          .includes(nm)
      ) {
        chk = true;
      }
      //
      if (
        cont.children[
          i
        ].children[0].children[1].children[1].children[0].innerText
          .toLowerCase()
          .includes(desc)
      ) {
        chk2 = true;
      }
      if (!chk || !chk2) {
        cont.children[i].style.display = "none";
        continue;
      }
      cker++;
    }
    if (cker == 0) {
      empty.style.display = "block";
    }
  } else if (Search.innerText == "Back to Records") {
    Search.innerText = "Search";
    empty.style.display = "none";
    for (let i = 1; i < cont.children.length; i++) {
      cont.children[i].style.display = "flex";
    }
  }
});

//Light And dark
let sample = document.getElementById("right_nav");
let dark = sample.children[1];
let light = sample.children[0];
dark.addEventListener("click", () => {
  document.getElementsByTagName("nav")[0].style.backgroundColor = "black";
  light.style.color = "white";
  dark.style.color = "white";
  CMP_name.style.color = "white";
  Stick.style.backgroundColor = "rgb(20,20,20)";
  Results.style.backgroundColor = "rgb(20,20,20)";
  empty.style.color = "white";
  document.body.style.backgroundImage =
    "url(imgs/jonatan-pie-h8nxGssjQXs-unsplash.jpg)";
});
light.addEventListener("click", () => {
  document.getElementsByTagName("nav")[0].style.backgroundColor =
    "rgb(165,165,165)";
  light.style.color = "black";
  dark.style.color = "black";
  CMP_name.style.color = "black";
  Stick.style.backgroundColor = "rgb(165,165,165,.583)";
  Results.style.backgroundColor = "rgb(165,165,165,.583)";
  empty.style.color = "black";
  document.body.style.backgroundImage = "url(imgs/Back.jpg)";
  light.addEventListener("mouseover", () => {
    light.style.color = "white";
  });
  light.addEventListener("mouseout", () => {
    light.style.color = "black";
  });
  dark.addEventListener("mouseover", () => {
    dark.style.color = "white";
  });
  dark.addEventListener("mouseout", () => {
    dark.style.color = "black";
  });
});
