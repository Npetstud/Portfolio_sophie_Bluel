"use strict";

const works = await fetch("http://localhost:5678/api/works").then(pieces => pieces.json());


for (let i = 0; i < works.length; i++) {

    const article = works[i];

const gallery = document.querySelector(".gallery");

const worksElement = document.createElement("article");
const imageElement = document.createElement("img");
img.setAttribute("crossorigin", "anonymous");
img.setAttribute("src", article.imageUrl);
img.setAttribute("alt", article.title);

const elementOfImage = document.createElement ("element")
elementOfImage.setAttribute("data-tag", article.category.name);
elementOfImage.setAttribute("data-id", article.id);

const titleElement = document.createElement ("p")
titleElement.innerText = article.title;

gallery.appendChild(worksElement);
worksElement.appendChild(imageElement);
worksElement.appendChild(elementOfImage);
worksElement.appendChild(titleElement);



// //fonction qui crée un élément "element" dans la galerie
//     const element = document.createElement("element");
//     element.setAttribute("data-tag", element.category.name);
//     element.setAttribute("data-id", element.id);

//     const img = document.createElement("img");
//     img.setAttribute("crossorigin", "anonymous");
//     img.setAttribute("src", element.imageUrl);
//     img.setAttribute("alt", element.title);

//     const photoTitle = document.createElement("photoTitle");
//     photoTitle.innerText = element.title;

//     element.appendChild(img);
//     element.appendChild(photoTitle);

//     gallery.appendChild(element);
};

// fetch("http://localhost:5678/api/works")
//     .then((res) => {
//         if (res.ok) {
//             return res.json();
//         }
//     })

//     //récupération de chaque élément et effectue la fonction "createGallery" pour chaque élément récupéré
//     .then((photos) => {
//         photos.forEach((photo) => {
//             createGallery(photo);
//         });
//     });

    //fonction qui crée un bouton dans la nav #filtres
const createButton = (button) => {
    //on récupère le parent des boutons
    const filtres = document.querySelector("#filtres");
    //on ajoute le bouton
    filtres.insertAdjacentHTML(
        "beforeend",
        `<button data-tag="${button.name}"> ${button.name} </button>`
    );
};

fetch("http://localhost:5678/api/categories")
    //si fetch fonctionne on récupère les données au format JSON
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })

    //récupération de chaque data et effectue la fonction "createButton" pour chaque data récupéré
    .then((data) => {
        data.forEach((button) => {
            createButton(button);
        });
    })

    .then(() => {
        //on récupère les boutons
        const buttons = document.querySelectorAll("#filtres button");
        //pour chaque bouton, si on clique dessus, fais une fonction
        buttons.forEach((button) => {
            button.addEventListener("click", function () {
                //on enlève le classe "active" à tout les boutons
                buttons.forEach((element) =>
                    element.classList.remove("active")
                );
                //on met la classe "active" au bouton cliqué
                this.classList.add("active");

                //on récupère le tag du bouton
                const buttonTag = this.dataset.tag;
                //on récupère les element faites plus haut
                const images = document.querySelectorAll(".gallery element");
                //pour chaque element on fait une fonction
                images.forEach((image) => {
                    //si l'image a le même tag que le bouton, on enlève la classe "filtered"
                    if (image.getAttribute("data-tag") === buttonTag) {
                        image.classList.remove("filtered");
                        //on applique la classe "filtered" aux autres qui n'ont pas le même tag
                    } else {
                        image.classList.add("filtered");
                    }
                });
            });
        });

        //fonction qui va afficher toutes les images
        function afficherToutesLesImages() {
            //récupère toutes les images
            const toutesLesImages =
                document.querySelectorAll(".gallery element");
            //on enlève la classe "filtered" a chaque images
            toutesLesImages.forEach((image) => {
                image.classList.remove("filtered");
            });
        }
        //quand on clique sur "Tous", va faire la fonction afficherToutesLesImages
        boutonTous.addEventListener("click", afficherToutesLesImages);
    });

//permet d'ajouter la classe active au bouton "Tous" par défaut
const boutonTous = document.querySelector('button[data-tag="Tous"]');
boutonTous.classList.add("active");
































// "use strict";

// const galleryPhotos = document.querySelector(".gallery");

// const galleryInfo = function(data){
//     const html = `
//     <article class="${data.category.id}">
//     <div class="${data.category.name}">
//     <img src="${data.imageUrl}" alt="${data.title}">
//     <p>${data.title}</p>
//     </div>
//     </article>
// `
// galleryPhotos.insertAdjacentHTML ("beforeend", html)

// };

// const infoGallery = async function(){
//     const res = await fetch("http://localhost:5678/api/works");
//     console.log(res);
//     const data= await res.json();
//     console.log(data);
//     for (const displayInsidefonction of data){
//         galleryInfo(displayInsidefonction);
//     }
// }    
//  infoGallery();   

//  const filtreGallery = document.querySelector("#filtres");

//  const filterInfo = function(data2){
//     const html =`
//     <button class="btn-filtrer">${data2.name}`
//     filtreGallery.insertAdjacentHTML ("beforeend", html)
//  };



 
//  const infoFilter = async function(){
//      const res = await fetch("http://localhost:5678/api/categories");
//      console.log(res);
//      const data2= await res.json();
//      console.log(data2);
//      for (const displayInsidefonction of data2){
//         filterInfo(displayInsidefonction)
//      }
//  }
//  infoFilter();

//  const boutonFiltrer = document.querySelector(".btn-filtrer");
// boutonFiltrer.addEventListener("click", function () {

    
// });







