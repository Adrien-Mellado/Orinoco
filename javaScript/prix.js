fetch ("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse2 => {
    // recuperation des prix //
    const price0 = reponse2[0].price*0.01+"€" ;
    const price1 = reponse2[1].price*0.01+"€";
    const price2 = reponse2[2].price*0.01+"€";
    const price3 = reponse2[3].price*0.01+"€";
    const price4 = reponse2[4].price*0.01+"€";

    // controle avec la console// 
    console.log(price0);
    console.log(price1);
    console.log(price2);
    console.log(price3);
    console.log(price4);

    //affichage des prix // 

    const affichage_prix_0 = document.querySelector("#prix0");
    affichage_prix_0.innerHTML = price0;


    const affichage_prix_1 = document.querySelector("#prix1");
    affichage_prix_1.innerHTML = price1;


    const affichage_prix_2 = document.querySelector("#prix2");
    affichage_prix_2.innerHTML = price2;


    const affichage_prix_3 = document.querySelector("#prix3");
    affichage_prix_3.innerHTML = price3;

    const affichage_prix_4 = document.querySelector("#prix4");
    affichage_prix_4.innerHTML = price4;

});
