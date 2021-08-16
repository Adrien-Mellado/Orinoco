fetch ("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse2 => {
    // recuperation des noms //
   

    const nom0 = reponse2[0].name ;
    const nom1 = reponse2[1].name;
    const nom2 = reponse2[2].name;
    const nom3 = reponse2[3].name;
    const nom4 = reponse2[4].name;

    
    console.log(nom0);
    console.log(nom1);
    console.log(nom2);
    console.log(nom3);
    console.log(nom4);

    //affichage des nom // 

    const affichage_nom_0 = document.querySelector("#nom0");
    affichage_nom_0.innerHTML = nom0;


    const affichage_nom_1 = document.querySelector("#nom1");
    affichage_nom_1.innerHTML = nom1;


    const affichage_nom_2 = document.querySelector("#nom2");
    affichage_nom_2.innerHTML = nom2;


    const affichage_nom_3 = document.querySelector("#nom3");
    affichage_nom_3.innerHTML = nom3;

    const affichage_nom_4 = document.querySelector("#nom4");
    affichage_nom_4.innerHTML = nom4;

});


