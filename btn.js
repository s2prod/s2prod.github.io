// Créer un élément `<meta>`
const meta = document.createElement("meta");
let url = document.querySelector(".btn-green").href;

// Définir les attributs
meta.setAttribute("http-equiv", "refresh");
meta.setAttribute("content", "5; url='" + url + "'");

// Accéder au `<head>`
const head = document.getElementsByTagName("head")[0];

// Ajouter le noeud `<meta>` au `<head>`
head.appendChild(meta);
