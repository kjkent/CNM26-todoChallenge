const input = document.getElementById("input");
const submit = document.getElementById("submit");
const del = document.getElementById("delete");
const list = document.getElementById("list");

submit.addEventListener("click", () => {
    list.innerHTML += `<li>${input.value}</li>`;
    input.value = "";
})

del.addEventListener("click", () => {
    list.removeChild(list.childNodes[list.childNodes.length - 1]);
})