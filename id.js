fetch ("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse2 => {
    // recuperation des images //
    const id0 = reponse2[0]._id ;
    const id1 = reponse2[1]._id;
    const id2 = reponse2[2]._id;
    const id3 = reponse2[3]._id;
    const id4 = reponse2[4]._id;

    // controle avec la console// 
    console.log(id0);
    console.log(id1);
    console.log(id2);
    console.log(id3);
    console.log(id4);

    //clik des id// 

    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');

});
