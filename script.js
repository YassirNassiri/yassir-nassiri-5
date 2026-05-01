let div = document.createElement("div");
let p = document.createElement("p");

p.textContent = "Ceci est un paragraphe";

div.appendChild(p);
document.body.appendChild(div);

p.textContent = "Le texte a été modifié";

p.style.backgroundColor = "lightblue";
p.style.textAlign = "center";
p.style.padding = "10px";

div.addEventListener("click", function() {
    p.textContent = "Un clic a été détecté";
});
