// delclaration de la variable " produitEnregistreDansLocalStorage" avec les key et value // 
// JSON.parse  pour convertir les donne au format JSON En objet javascript // 
let ProduitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.log(ProduitEnregistreDansLocalStorage);



//---------------------------------------------------afficher les produit au panier-----------------------------------------------------------------------------// 

let affichage = document.querySelector("#bloc_panier");


// si le panier est vide // 
if (ProduitEnregistreDansLocalStorage === null) {
    let paniervide = `<div class="container_panier_vide">
                        <div> Le panier est vide </div>
                    </div>
                    `;

    affichage.innerHTML = paniervide;


} else {

    let structureProduitPanier = [];

    for (k = 0; k < ProduitEnregistreDansLocalStorage.length; k++) {
        structureProduitPanier = structureProduitPanier +
            `<div class="container_recapitulatif">
                <div>  ${ProduitEnregistreDansLocalStorage[k].nomProduit}    ${ProduitEnregistreDansLocalStorage[k].couleur}</div>
                <div> Prix : ${ProduitEnregistreDansLocalStorage[k].prix} € - <button class="btn_supprimer"> Supprimer article </button> </div>
            </div>
            `;
    }
    if (k == ProduitEnregistreDansLocalStorage.length) {
        // affichage //
        affichage.innerHTML = structureProduitPanier;

    }

}

//---------------------------------------------------FIN afficher les produit au panier-----------------------------------------------------------------------------// 






//------------------------------------------------------------------Bouton suprimer------------------------------------------------------------------------//

/*let btn_supprimer = document.querySelectorAll(".btn_supprimer");


for ( let l=0 ; l < btn_supprimer.length; l++ ){

    

    btn_supprimer[l].addEventListener("click", (event)=>{
        event.preventDefault();

        //supprimer le produit par l'id // 
        let id_selectionner_suppression = ProduitEnregistreDansLocalStorage[l].reponse2._id;
        console.log(id_selectionner_suppression);


        //supprimer le produit // 
        ProduitEnregistreDansLocalStorage = ProduitEnregistreDansLocalStorage.filter((el)=> el.reponse2._id !== id_selectionner_suppression);
        
        // envoie la variable dans le local // 
        // JSON.parse  pour convertir les donne au format JSON En objet javascript // 
        let ProduitEnregistreDansLocalStorage= JSON.parse(localStorage.getItem("produit"));


    });
};*/

//------------------------------------------------------------------FIN Bouton suprimer----------------------------------------------------------------------//






// -----------------------------------------------------------montant total du panier -----------------------------------------------------------------------// 

let prix_total = [];

// aller chercher les prix // 
for (let m = 0; m < ProduitEnregistreDansLocalStorage.length; m++) {
    let prix_produit_panier = ProduitEnregistreDansLocalStorage[m].prix;
    // metre les prix dans la variable //
    prix_total.push(prix_produit_panier);
    console.log(prix_total);
}

// additionner les prix avec la methode reduce//
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const prixTotal = prix_total.reduce(reducer, 0);
console.log(prixTotal);


// afficher total // 
let affichage_prix_total = `
<div class="affichage_prix_total"> Le prix total est de : ${prixTotal} € </div>

`
// injextion page html // 
affichage.insertAdjacentHTML("beforeend", affichage_prix_total);

// ----------------------------------------------------------- FIN Montant total du panier -----------------------------------------------------------------------// 






//--------------------------------------------------------------Formulaire--------------------------------------------------------------------------------------- // 

let position_element = document.querySelector("#bloc_panier");

let affichage_formulaire = () => {
    let structure_formulaire = `
    <div id="formulaire_commande">
        <h2> Remplissez le formulaire pour valider la commande </h2>


        <form>
            <label for="prenom">Prénom : </label>
            <input id="prenom" type="text" name="prenom" required>

            <label for="nom">Nom : </label>
            <input type="text" id="nom" name="nom" required>

            <label for="adresse">Adresse :</label>
            <textarea id="adresse" name="adresse" required></textarea>

            <label for="ville">Ville : </label>
            <input type="text" id="ville" name="ville" required>

            <label for="code_postal">Code postal : </label>
            <input type="text" id="code_postal" name="code_postal" required>

            <label for="email">E-mail :</label>
            <input type="email" id="email" name="email" required>

            <button id="btn_envoyer_formulaire" type="submit" name="btn_envoyer_formulaire">Confirmation de la commande
            </button>

        </form>
    </div>`;

    // injection HTM //
    position_element.insertAdjacentHTML("afterend", structure_formulaire);


}

// affichage formulaire // 
affichage_formulaire();

//selection du bouton valide commande // 
let btn_envoyer_formulaire = document.querySelector("#btn_envoyer_formulaire");



//---------------------------Addenvestlistener----------------------//
btn_envoyer_formulaire.addEventListener("click", (event) => {
    event.preventDefault();

    // Controle Formulaire // 

    let regle_prenom_nom_ville = (value) => {
        return /^[A-Za-z] {3,20}$/.test(value);
    }

    function prenom_controle() {

        let le_prenom = prenom.value;
        if (regle_prenom_nom_ville(le_prenom)) {
            return true;
        } else {
            alert("Chiffre et symbole ne sont pas autorisé \n Ne pas depasse 20 caracteres , minimum 3 caracteres");
            return false;
        };
    }

    function nom_controle() {

        let le_nom = nom.value;
        if (regle_prenom_nom_ville(le_nom)) {
            return true;
        } else {
            alert("Chiffre et symbole ne sont pas autorisé \n Ne pas depasse 20 caracteres , minimum 3 caracteres");
            return false;
        };
    }


    if (prenom_controle() , nom_controle()) {

        // metre objet fomulaire_value dans le local storage // 
        localStorage.setItem("formulaire_value", JSON.stringify(formulaire_value));

    } else {
        alert("Veuillez bien remplir le formulaire");
    }








    // recuperation des valeur du formulaire  // 

    let formulaire_value = {
        prenom: document.querySelector("#prenom").value,
        nom: document.querySelector("#nom").value,
        adresse: document.querySelector("#adresse").value,
        ville: document.querySelector("#ville").value,
        code_postal: document.querySelector("#code_postal").value,
        email: document.querySelector("#email").value,
    }




    //mettre les value du formulaire et objet a envoyer vers le serveur // 
    let aEnvoyer = {
        ProduitEnregistreDansLocalStorage,
        formulaire_value,
    };

})





