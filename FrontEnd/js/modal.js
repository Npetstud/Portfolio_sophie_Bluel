// import deleteWorks from "./delete.js";

const openModal = function(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.style.display = "block";
    target.removeAttribute("aria-hidden");
    target.setAttribute("aria-modal", "true");
  };
  
  const closeModal = function(e) {
    e.preventDefault();
    const modal = e.target.closest(".modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("aria-modal");
  };
  
  document.querySelectorAll(".js-modal").forEach(a => {
    a.addEventListener("click", openModal);
  });
  
  document.querySelectorAll(".js-modal-close").forEach(button => {
    button.addEventListener("click", closeModal);
  });
  
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
      e.target.setAttribute("aria-hidden", "true");
      e.target.removeAttribute("aria-modal");
    }
  });
  
  window.addEventListener("keydown", e => {
    if (e.key === "Escape" || e.key === "Esc") {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        modal.removeAttribute("aria-modal");
      });
    }
  });

  function renderProjectModal(works) {
    const modalProject = document.querySelector(".project-modal");
    modalProject.innerHTML = "";
    const tokenJeton = window.localStorage.getItem("jeton")    
    const projectModal = document.querySelector('.project-modal');
  
    for (let i = 0; i < works.length; i++) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const trashIcon = document.createElement('i');
      
    
    
      
  
  
      img.setAttribute("src", works[i].imageUrl);
      figcaption.setAttribute("alt", works[i].title);
      trashIcon.classList.add('fa-solid', 'fa-trash-can');
      
      

      trashIcon.addEventListener('click', function() {
        const projectId = works[i].id;
        fetch(apiWorks + '/' + projectId, {
          method: 'DELETE',
          headers: {
            Authorization : 'Bearer ' + tokenJeton,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => {
          figure.remove(data);
          
        })
        
        
      });
  
      projectModal.appendChild(figure);
      figure.append(img, figcaption, trashIcon);
  
      
    }
  }


const ajouterPhotoBtn = document.querySelector('.js-ajouter-photo');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const backArrowBtn = document.querySelector('.fa-arrow-left');

ajouterPhotoBtn.addEventListener('click', () => {

// Passage de modal1 a modal2

  modal2.style.display = 'flex';
  modal1.style.display = 'none'; 

});

backArrowBtn.addEventListener('click', () => {

 // Passage de modal2 a modal1

  modal1.style.display = 'flex';
  modal2.style.display = 'none';
});

// AJOUTER UN PROJET


const form = document.getElementById('project-form');
const fileInput = document.getElementById('file-upload');
const tokenJeton = window.localStorage.getItem('jeton');


// affichage de la prévisualisation de l'image sélectionnée
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const previewImg = document.createElement('img');
    const previewContainer = document.createElement('div');
    const projectModal2 = document.querySelector('.project-modal2')

    const reader = new FileReader();

    reader.onload = function(event) {
      previewImg.setAttribute('src', event.target.result);
      previewContainer.appendChild(previewImg);
      form.insertBefore(previewContainer, form.childNodes[0]);
      
    }

    reader.readAsDataURL(file);
    projectModal2.style.display = 'none';
    
    
  }
});

// soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // récupération des valeurs du formulaire
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const file = document.getElementById('file-upload').files[0];

  // Validation des données du formulaire
  if (!title || !category || !file) {
    console.error('Veuillez remplir tous les champs du formulaire');
    return;
  }
  
  

  // création de l'objet FormData pour l'envoi du formulaire
  const formData = new FormData();
  formData.append('title', title);
  formData.append('category', category);
  formData.append('image', file);

  // envoi de la requête pour l'ajout de la photo dans la liste de projets
  fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      Authorization : 'Bearer ' + tokenJeton,
      
    },
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // réinitialisation du formulaire et de la prévisualisation de l'image
    form.reset();
    previewContainer.innerHTML = '';
  })
  .catch(error => console.error('Erreur lors de l\'ajout du projet :', error));
  });
  