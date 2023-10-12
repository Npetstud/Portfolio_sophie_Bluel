"use strict";
// Méthode concluante pour créer la page dynamique qui se raffraichit pour chaque click sur les filtres

// mettre un try/ catch en place.. (avec finally) etape 2-1 et 2-2

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

// identifiant sophie.bluel@test.tld et MDP S0phie
// Processus de connexion et déconnexion 

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const boutonFiltre = document.querySelector(".filtre")
// Vérifier si un utilisateur est connecté
if (localStorage.getItem("jeton")) {

    // Afficher le bouton de déconnexion
    logoutBtn.style.display = 'flex';
  
    // Cacher le bouton login
    loginBtn.style.display = 'none';
  
    // Cacher les boutons des filtres
    boutonFiltre.style.display = 'none';
  
}
  // DECONNEXION 
  logoutBtn.addEventListener('click', function() {
  
    // Supprimer le token du local storage
    localStorage.removeItem('jeton');
  
    // Cacher le bouton de déconnexion
    logoutBtn.style.display = 'none';
  
    // Afficher le lien de connexion
    loginBtn.style.display = 'inline-block';
  });






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

