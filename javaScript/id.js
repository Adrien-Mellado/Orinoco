


fetch("http://localhost:3000/api/teddies")
    .then(reponse => reponse.json())
    .then(reponse2 => {
        // recuperation des id //
        const id0 = reponse2[0]._id;
        const id1 = reponse2[1]._id;
        const id2 = reponse2[2]._id;
        const id3 = reponse2[3]._id;
        const id4 = reponse2[4]._id;

        // controle avec la console// 
        /*console.log(id0);
        console.log(id1);
        console.log(id2);
        console.log(id3);
        console.log(id4);*/













    });


const queryString_url_id = window.location.search;
console.log(queryString_url_id);

const leID = queryString_url_id.slice(1)
console.log(leID);

/*let reponse = await fetch(`http://localhost:3000/api/teddies/${leID}`);*/

const positionElement2 = document.querySelector(".bloc_option");
console.log(positionElement2);

const structureProduit = `

<div id="image1"><img src="${leID}"/> </div>
<h2 id="nom1"></h2>
<p id="prix1"></p>
`

positionElement2.innerHTML = structureProduit;

