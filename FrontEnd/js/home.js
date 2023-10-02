"use strict";
// Méthode concluante pour créer la page dynamique qui se raffraichit pour chaque click sur les filtres

const apiWorks = "http://localhost:5678/api/works";
fetch(apiWorks)
  .then(response => response.json())
  .then(works => {
    toutPortfolio(works)
    galleryPhotos = works
  });
const apiCategories = "http://localhost:5678/api/categories";
fetch(apiCategories)
.then(response => response.json())
.then(categories => {
  touteCategories(categories);
});

let galleryPhotos = []



function toutPortfolio (works) {  
    let photo = document.querySelector(".gallery");
    
    photo.innerHTML = "";

    

    for (let i = 0; i < works.length; i++){
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");

        img.setAttribute("src", works[i].imageUrl);
        figcaption.setAttribute("alt", works[i].title);
        

        figcaption.innerHTML = works[i].title;

        
        photo.appendChild(figure);
        figure.append(img, figcaption);
    }
      
    }

    function touteCategories (categories) {  
    
      let filtre = document.querySelector(".filtre");
  
      filtre.innerHTML = "";

      
let allButton = document.createElement("button");  
      allButton.innerHTML = "Tous";
      filtre.appendChild(allButton);
      allButton.addEventListener("click", function () {
        toutPortfolio(galleryPhotos);
        
      });
    
      for (let i = 0 ; i < categories.length; i++){

      


        let button = document.createElement("button");
        button.setAttribute("value", categories[i].name);
        button.innerHTML = categories[i].name;
        filtre.appendChild(button);
        button.addEventListener("click", function (){
        const filterphoto = galleryPhotos.filter(function(photo){
                
                console.log(categories[i].id, photo.categoryId)

                return photo.categoryId === categories[i].id
              });
            
              toutPortfolio(filterphoto)
            

        }) 
        
}
}






// Seconde méthode non concluante n'ayant pas réussi a creer un filtre interactf


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

//  const filterInfo = function(button){
//     const html =`
//     <button data-tag="${button.name}"> ${button.name} </button>`
//     filtreGallery.insertAdjacentHTML ("beforeend", html)
//  }
//  const buttons = document.querySelectorAll("#filtres button");
//             //pour chaque bouton, si on clique dessus, fais une fonction
//             buttons.forEach((button) => {
//                 button.addEventListener("click", function () {
//                     //on enlève le classe "active" à tout les boutons
//                   for
//                         }
//                     )});
                
            
    
           
 
 
//  const infoFilter = async function(){
//      const res = await fetch("http://localhost:5678/api/categories");
//      console.log(res);
//      const data= await res.json();
//      console.log(data);
//      for (const displayInsidefonction of data){
//         filterInfo(displayInsidefonction)
//      }
//  }
//  infoFilter();

//