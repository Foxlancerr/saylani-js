let body = document.querySelector("body");
body.style.position = "relative";
let div = document.createElement("div");
div.style.position = "absolute";
div.style.width = "20px";
div.style.height = "20px";
div.style.backgroundColor = "yellow";
body.appendChild(div);

body.addEventListener("mousemove", (e) => {
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX + "px";
});
