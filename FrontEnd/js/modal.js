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
    
    const projectModal = document.querySelector('.project-modal');
  
    for (let i = 0; i < works.length; i++) {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      
  
  
      img.setAttribute("src", works[i].imageUrl);
      figcaption.setAttribute("alt", works[i].title);
      
      
     
  
   
  
      projectModal.appendChild(figure);
      figure.append(img, figcaption);
  
      
    }
  }