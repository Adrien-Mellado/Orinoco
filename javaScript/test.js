


fetch ("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse2 => {
    // recuperation des donee //
   
    

    for ( var i = 0 ; i < 5 ; i++){

        const nom = reponse2[i].name;
        const prix = reponse2[i].price*0.01+"€";
        const id = reponse2[i]._id;
        const img = reponse2[i].imageUrl;
        
        
        console.log(nom)
        
        // affichage // 

        const affichage_nom_0= document.querySelector("#nom0");
        affichage_nom_0.innerHTML = nom;

        const affichage_nom_1= document.querySelector("#nom1");
        affichage_nom_1.innerHTML = nom1;

        const affichage_nom_2= document.querySelector("#nom2");
        affichage_nom_2.innerHTML = nom;

        const affichage_nom_3= document.querySelector("#nom3");
        affichage_nom_3.innerHTML = nom;

        const affichage_nom_4= document.querySelector("#nom4");
        affichage_nom_4.innerHTML = nom ;
    }

    

})


// affichage // 




// declaration variable // 

let nomProduit = [];
let prix = [];
let urlPhoto = [];
let couleur = [];

nom.forEach ((element , i) => {
   nomProduit[i]=element.nomProduit; 
   prix[i]=element.prix; 
   urlPhoto[i]=element.urlPhoto; 
    
});

console.log(nomProduit);








// afficher les objet sur la pages // 

structureProduits = ``



/*
<div class="bloc_produit">
<a href="./produit.html?./javaScript/id.js">
    <div id="image0"></div>
    <h2 id="nom0"></h2>
    <p id="prix0"></p>
</a>
</div>



<div class="bloc_produit">
<a href="produit.html">
<div id="image1"></div>
<h2 id="nom1"></h2>
<p id="prix1"></p>
</a>
</div>


<div class="bloc_produit">
<a href="produit.html">
<div id="image2"></div>
<h2 id="nom2"></h2>
<p id="prix2"> </p>
</a>
</div>


<div class="bloc_produit">
<a href="produit.html">
<div id="image3"></div>
    <h2 id="nom3"></h2>
    <p id="prix3"></p>
</a>
</div>



<div class="bloc_produit">
<a href="produit.html">
<div id="image4"></div>
    <h2 id="nom4"></h2>
    <p id="prix4"></p>
</a>
</div>*/