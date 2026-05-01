// Création d'une nouvelle div dans le document
const nouvelleDiv = document.createElement('div');

// Création d'un paragraphe p à l'intérieur de la div
const paragraphe = document.createElement('p');

// Ajout de texte initial au paragraphe
paragraphe.textContent = "Ceci est un paragraphe";

// Ajout du paragraphe à la div
nouvelleDiv.appendChild(paragraphe);

// Ajout de la div au body du document
document.body.appendChild(nouvelleDiv);

// Modification du texte du paragraphe
paragraphe.textContent = "Le texte a été modifié";

// Modification du style CSS du paragraphe
paragraphe.style.backgroundColor = "lightblue";


