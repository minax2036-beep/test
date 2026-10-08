document.addEventListener("DOMContentLoaded", function () {
  const message = document.createElement("p");

  message.textContent = "JavaScript Success!";
  message.style.color = "blue";
  message.style.fontSize = "30px";

  document.body.appendChild(message);
});
