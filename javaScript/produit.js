
// recupération de l'id dans l'url //

let queryString_url_id = window.location.search;

// extraire juste le id methode 2 // 
let urlSearchparams = new URLSearchParams(queryString_url_id);

let id = urlSearchparams.get("id");

// affichage du produit qui a ete selectione par l' id //

fetch(`http://localhost:3000/api/teddies/${id}/` )
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        let j = 0;
        
            document.querySelector("#nom" +j).innerHTML = reponse2.name; 
            document.querySelector("#prix"  +j).innerHTML = reponse2.price* 0.01 + `€` ;
            document.querySelector("#image" +j ).innerHTML = ` <img src="${reponse2.imageUrl}"></a>`;
           
           // choix de couleur // 
            document.querySelector("#couleur").innerHTML = 
            ` <option  value="couleur_0">${reponse2.colors[0]}</option>
            <option value="couleur_1">${reponse2.colors[1]}</option>
            <option  value="couleur_2">${reponse2.colors[2]}</option>
            <option  value="couleur_3">${reponse2.colors[3]}</option> </select>`;
          
            j++;       
            
            //----------------  Gestion Du Panier ---------------------------//

            //Selection de l'id du form //
            let idform = document.querySelector("#couleur");
    
            // Mettre le choix dans une variable // 
            let choixForm  = idform.value;
          
            //bouton ajouter au Panier // 
            let btn_ajouter = document.querySelector("#btn_ajouter");

            // ecouter le bouton et ajouter le panier // 
            btn_ajouter.addEventListener("click", (event)=>{
                event.preventDefault();

                  // Mettre le choix dans une variable // 
                let choixForm  = idform.value;
                
                // recuperation valeurs formulaire // 

                let Produit_Panier = {
                    nomProduit: reponse2.name,
                    prix: reponse2.price* 0.01  ,
                    couleur: choixForm,
                    id : reponse2._id,
                } 
                
                //  stoker les valeur dans local storage // 

            // delclaration de la variable " produitEnregistreDansLocalStorage" avec les key et value // 
            // JSON.parse  pour convertir les donne au format JSON En objet javascript // 
            let ProduitEnregistreDansLocalStorage= JSON.parse(localStorage.getItem("produit"));

                // fonction popup // 
                function popupConfirmation() {

                    let confirmString = reponse2.name + ` couleur : ` + choixForm;
                    confirmSting = `a bien été ajouté au panier \n Consulter le panier OK ou revenir à L'accueil ANNULER`;

                    window.location.href = window.confirm(confirmString )? "panier.html":  "index.html";
                }
                    
                // Ajout produit dans le local storage // 
                function ajoutProduuit()  {
                    // ajout dans le tableau de l'objet avec les values choisi //
                    ProduitEnregistreDansLocalStorage.push(Produit_Panier);
                    // la transformation en format JSON et envoyer dans le key "produit" du local storage //
                    localStorage.setItem("produit",JSON.stringify(ProduitEnregistreDansLocalStorage));
                }

                // si il y a deja des produit dans le local // 

                if(ProduitEnregistreDansLocalStorage){
                    popupConfirmation();
                    ajoutProduuit();
                

                }

                // si il y a pas de produit dans le local //
                else{
                    ProduitEnregistreDansLocalStorage = [];
                    ajoutProduuit();
                    popupConfirmation();

                }
            });
    });


    
