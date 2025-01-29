let firstname = "";
let lastname = "";
let tickets = "";

function bestellen() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let tickets = document.getElementById("tickets").value;
    let totaalprijs = (tickets * 15);

    document.getElementById("formulier").innerHTML = `<h3>Bedankt voor uw bestelling, U heeft ${tickets} kaarten gereserveerd.</h3><br>
                                                      <h3>Het totaalbedrag voor uw bestelling is € ${totaalprijs}</h3>`;

    for(i = 0; i < tickets; i+= 1) {
        document.getElementById("formulier").innerHTML += `<br><br>
                                                          Naam: ${firstname} ${lastname} <br>
                                                          Prijs: €${tickets} <br>
                                                          <img src='./resources/qrcode.png'>`;
    }
}

