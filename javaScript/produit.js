
// recupération de l'id dans l'url //


let queryString_url_id = window.location.search;
//console.log(queryString_url_id);//

// extraire juste le id methode 1  // 
/*let leid = queryString_url_id.slice(4);
console.log(leid);*/

// extraire juste le id methode 2 // 
let urlSearchparams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchparams);//

let id = urlSearchparams.get("id");
//console.log(id);//

// affichage du produit qui a ete selectione par l' id //



fetch(`http://localhost:3000/api/teddies/${id}/` )
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        let j = 0;
        
            document.querySelector("#nom" +j).innerHTML = reponse2.name; 
            document.querySelector("#prix"  +j).innerHTML = reponse2.price* 0.01 + "€";
            document.querySelector("#image" +j ).innerHTML = ` <img src="${reponse2.imageUrl}"></a>`;
           
           // choix de couleur // 
            document.querySelector("#couleur"+j  ).innerHTML = 
            `<option id="couleur_option" value="0">${reponse2.colors[0]}</option>
            <option id="couleur_option" value="1">${reponse2.colors[1]}</option>
            <option id="couleur_option" value="2">${reponse2.colors[2]}</option>
            <option id="couleur_option" value="3">${reponse2.colors[3]}</option> `;
          
            //document.querySelector("#lien" + j).innerHTML= `<a href="./produit.html?id=${...}${element._id}">`;//
           console.log(reponse2);
            j++;       
            

        
        

        
        
        
        
    });