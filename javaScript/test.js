
fetch("http://localhost:3000/api/teddies")
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        let j = 0;
        reponse2.forEach(element => {
            document.querySelector("#nom" + j).innerHTML = element.name; 
            document.querySelector("#prix" + j).innerHTML = element.price* 0.01 + "€";
            document.querySelector("#image" + j).innerHTML = `<img src="${element.imageUrl}">`;
            //document.querySelector("#lien" + j).innerHTML= `<a href="./produit.html?${element._id}">`;//
            console.log(element._id)
            j++;       
        
          
           
        });

        
       
    
    });

            
    


  