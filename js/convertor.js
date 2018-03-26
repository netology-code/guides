const myForm = document.querySelector("#form");

myForm.addEventListener("submit", e => {
  e.preventDefault();

  let link = document.querySelector("#old").value;

  // clean up
  removePrevious();
  document.querySelector("#old").value = "";

  const username = link.match(/\/\/(.*)@/).pop(),
        filepath = link.match(/.ru(.*)/).pop();
  link = `http://university.netology.ru/u/${username}${filepath}`;

  addElement(link);

  const copyBtn = document.querySelector("#btn");
  copyBtn.addEventListener("click", copy);
});


function addElement(thing) {
  // create div, inside is a paragraph with the link field
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "newText");

  const linkInput = document.createElement("input");
  linkInput.setAttribute("type", "text");
  linkInput.setAttribute("id", "new");
  linkInput.setAttribute("value", thing);

  // create button
  const btn = document.createElement("button");
  btn.setAttribute("id", "btn");
  btn.innerHTML = "Скопировать";

  // add them to the same form
  myForm.appendChild(newDiv);
  newDiv.appendChild(linkInput);
  newDiv.appendChild(btn);
}

function removePrevious () {
  if (document.querySelector("#newText")) {
    let previous = document.querySelector("#newText");
    previous.parentNode.removeChild(previous);
  }
}

function copy(e) {
  e.preventDefault();
  document.querySelector("#newText input").select();
  document.execCommand("copy");
}
