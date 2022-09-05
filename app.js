let a = document.getElementsByClassName("inp");
console.log(a);
let btn = document.getElementById("add");
let box = document.getElementById("cont");

btn.addEventListener("click", (e) => {
  console.log(e.target.files);
  let newRecord = document.createElement("div");
  newRecord.innerHTML = `<img src="imgs/user1.png" alt="" width="50px" height="60px" />
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
