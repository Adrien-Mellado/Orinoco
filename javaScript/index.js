
fetch("http://localhost:3000/api/teddies/")
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        let j = 0;
        reponse2.forEach(element => {
            document.querySelector("#nom" + j).innerHTML = element.name; 
            document.querySelector("#prix" + j).innerHTML = element.price* 0.01 + `€` ;
            document.querySelector("#image" + j).innerHTML = ` <a href= "./produit.html?id=${element._id}" ><img src="${element.imageUrl}"></a>`;
            j++;       
            
        
        });

    });




    