let position_element = document.querySelector("#box_recap_commande");
let prixTotal = localStorage.getItem("prixTotal");

function  affichage_recap() {

    let structure_recap = `
    <h1> Récapitulatif de votre commande</h1>



        <div id="recap_commande">
            <p class="merci">Merci pour votre commande</p>
            <p>Votre commande a bien été prise en compte </p>
            <p> Le montant de votre commande est de : <span class="gras"> ${prixTotal} €</span> </p>
            <p class="gras"> Au plaisir de vous revoir</p>
        </div>`;

    // injection HTM //
    position_element.insertAdjacentHTML("afterbegin", structure_recap);

}

// affichage recap // 
affichage_recap();

// effacer tout le local //

function enleverCleLocalStorage (key){
    localStorage.removeItem(key);
    
};

enleverCleLocalStorage("prixTotal");
enleverCleLocalStorage("produit");
enleverCleLocalStorage("reponse2._id");

