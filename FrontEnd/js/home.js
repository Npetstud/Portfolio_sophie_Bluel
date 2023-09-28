"use strict";

const galleryPhotos = document.querySelector(".gallery");

const galleryInfo = function(data){
    const html = `
    <article>
    <img src="${data.imageUrl}" alt="${data.title}">
    <p>${data.title}</p>
    </article>
`
galleryPhotos.insertAdjacentHTML ("beforeend", html)

};

const infoGallery = async function(){
    const res = await fetch("http://localhost:5678/api/works");
    console.log(res);
    const data= await res.json();
    console.log(data);
    for (const displayInsidefonction of data){
        galleryInfo(displayInsidefonction);
    }
}    
 infoGallery();   

