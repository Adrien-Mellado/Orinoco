
fetch("http://localhost:3000/api/teddies/")
    .then(reponse => reponse.json())
    .then(reponse2 => {
    
        let j = 0;
        reponse2.forEach(element => {
            document.querySelector("#nom" + j).innerHTML = element.name; 
            document.querySelector("#prix" + j).innerHTML = element.price* 0.01 + "€";
            document.querySelector("#image" + j).innerHTML = ` <a href= "./produit.html?id=${element._id}" ><img src="${element.imageUrl}"></a>`;
            //document.querySelector("#lien" + j).innerHTML= `<a href="./produit.html?id=${...}${element._id}">`;//
            console.log(element._id)
            j++;       
            
        
        });

        
        
        
        
    });




    /*let dataApi = fetch("http://localhost:3000/api/teddies/");

    dataApi.then(async (responseData)=>{
        console.log(responseData);

        let response = await responseData.json();
        console.log(response);


        try {
            // capture API //
            let imagurl = response[0].imageUrl;
            let id = response[0]._id;
            console.log(imagurl);
            console.log(id);
            



        } catch (err) {
            console.log(err);
        }
    })

            
    .catch((err)=>{
        console.log(err);
    });*/


  