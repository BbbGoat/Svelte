const loginFrom = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    console.log(event);
    alert("clicked!");
}

loginFrom.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);