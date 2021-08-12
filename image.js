fetch ("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse2 => {
    // recuperation des images //
    const img0 = reponse2[0].imageUrl;
    const img1 = reponse2[1].imageUrl;
    const img2 = reponse2[2].imageUrl;
    const img3 = reponse2[3].imageUrl;
    const img4 = reponse2[4].imageUrl;

    // controle avec la console// 
    console.log(img0);
    console.log(img1);
    console.log(img2);
    console.log(img3);
    console.log(img4);

// Affichage des images //
const image00_img =`<img src="${reponse2[0].imageUrl}">`;
const affichage_image0 = document.querySelector("#image0");
affichage_image0.insertAdjacentHTML("afterbegin",image00_img);


const image01_img =`<img src="${reponse2[1].imageUrl}">`;
const affichage_image1 = document.querySelector("#image1");
affichage_image1.insertAdjacentHTML("afterbegin",image01_img);


const image02_img =`<img src="${reponse2[2].imageUrl}">`;
const affichage_image2 = document.querySelector("#image2");
affichage_image2.insertAdjacentHTML("afterbegin",image02_img);


const image03_img =`<img src="${reponse2[3].imageUrl}">`;
const affichage_image3 = document.querySelector("#image3");
affichage_image3.insertAdjacentHTML("afterbegin",image03_img);

const image04_img =`<img src="${reponse2[4].imageUrl}">`;
const affichage_image4 = document.querySelector("#image4");
affichage_image4.insertAdjacentHTML("afterbegin",image04_img);

});
 


// affichage des donnes recherche dans la console //
fetch('http://localhost:3000/api/teddies')
.then(res => res.json())
.then(data => console.table(data));