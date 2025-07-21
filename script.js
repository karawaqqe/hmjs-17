const textInput = document.getElementById("textInput");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
  changeButton.textContent = textInput.value;
});

const mainImage = document.getElementById("mainImage");
mainImage.src = "./img/sonic.png";

const mainLink = document.getElementById("mainLink");
const linkImage = document.getElementById("linkImage");

mainLink.href = "https://google.com";
linkImage.alt = "google";

const list = document.getElementById("list");
const firstItem = list.querySelector("li");
firstItem.textContent = "voistinumi";
