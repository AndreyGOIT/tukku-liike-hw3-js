/*----------------- JSON-dataa -------------*/
const jsonData = `
[
  {
    "tuotekoodi": "T001",
    "tuotenimi": "Kahvi",
    "ostohinta": 2.5,
    "myyntihinta": 5.0,
    "toimittajanLinkki": "http://kahvitoimittaja.com"
  },
  {
    "tuotekoodi": "T002",
    "tuotenimi": "Tee",
    "ostohinta": 1.5,
    "myyntihinta": 3.5,
    "toimittajanLinkki": "http://teetoimittaja.com"
  },
  {
    "tuotekoodi": "T003",
    "tuotenimi": "Sokeri",
    "ostohinta": 0.8,
    "myyntihinta": 2.0,
    "toimittajanLinkki": "http://sokeritoimittaja.com"
  },
  {
    "tuotekoodi": "T004",
    "tuotenimi": "Kaakao",
    "ostohinta": 3.0,
    "myyntihinta": 6.5,
    "toimittajanLinkki": "http://kaakaotoimittaja.com"
  },
  {
    "tuotekoodi": "T005",
    "tuotenimi": "Maito",
    "ostohinta": 0.9,
    "myyntihinta": 1.8,
    "toimittajanLinkki": "http://maitotoimittaja.com"
  },
  {
    "tuotekoodi": "T006",
    "tuotenimi": "Juusto",
    "ostohinta": 2.0,
    "myyntihinta": 4.5,
    "toimittajanLinkki": "http://maitotoimittaja.com"
  },
  {
    "tuotekoodi": "T007",
    "tuotenimi": "Keksi",
    "ostohinta": 1.0,
    "myyntihinta": 2.5,
    "toimittajanLinkki": "http://leipomotoimittaja.com"
  }
]
`;

// JSON-merkkijonon jäsentäminen JavaScript-objekteiksi
const tuotteet = JSON.parse(jsonData);
  /*------------- KATE:en käsittely --------------------*/
  //function jokaa laskee kate
  function laskeKate(ostohinta, myyntihinta) {
    const kate = ((myyntihinta - ostohinta) / ostohinta) * 100;
    return kate;
  }
  //loop joka laskee kate ja lisaa kate tuotteeseen
  for (let i = 0; i < tuotteet.length; i++) {
    const tuote = tuotteet[i];
    const kate = laskeKate(tuote.ostohinta, tuote.myyntihinta);
    
    tuote.kate = kate.toFixed(2);
  }

/*------------------ TUOTTEET taulukko---------------------*/
let x = "";
  //JavaScript-funktio haeTuottet alkaa...
  function haeTuottet() {
    //x-muuttujaan rakennetaan HTML-koodisto, jossa sekä taulukon ohjaustägejä, että tuotteet-tiedossa olevaa dataa
    x ="<table><tr><th>Tuotekoodi</th><th>Nimi</th><th>Ostohinta</th><th>Myyntihinta</th><th>Kate-%</th></tr>"; //taulukon aloitus+otsikot
      for (let i = 0; i < tuotteet.length; i++) {
      //käsitellään kaikki JavaObjektissa tuotteet olevat rivit ja lisätään taulukkokoodit kunkin sarakkeen ympärille
      x += "<tr><td>" + tuotteet[i].tuotekoodi + "</td>";
      x += "<td>" + tuotteet[i].tuotenimi + "</td>";
      x += "<td>" + tuotteet[i].ostohinta + "</td>";
      x += "<td>" + tuotteet[i].myyntihinta + "</td>";
      x += "<td>" + tuotteet[i].kate + "</td></tr>";
    }
    x += "</table>"; //taulukon lopetus
    //sijoitetaan silmukassa luotu taulukko HTML-sivun kohtaan, jossa on merkintä id="autot"

    document.getElementById("tbl").innerHTML = x;
  } //JavaScript-funktio haeTuottet loppu...
  //haeTuottet(); //kutsuu funktiota

/*---------------- TOIMITTAJAN linkit ------------------*/
//versio 1
/*let toimLinkkiArray = []; //taulukko, johon lisätään toimittajien linkit
for (let i = 0; i < tuotteet.length; i++) {
    toimLinkkiArray.push(tuotteet[i].toimittajanLinkki);
}
console.log(toimLinkkiArray);
const uniikkiLinkit = [...new Set(toimLinkkiArray)]; //poistaa toistot
console.log(uniikkiLinkit);
function haeToimittajat() {
    let list = document.createElement("ul");
    for (let i = 0; i < uniikkiLinkit.length; i++) {
      let item = document.createElement("li");
      let link = document.createElement("a");
      link.href = uniikkiLinkit[i];
      link.textContent = uniikkiLinkit[i];
      link.target = "_blank";
      item.appendChild(link);
      list.appendChild(item);
    }
    document.getElementById("links").innerHTML = list.innerHTML;
}
haeToimittajat();*/
//versio 2
function haeToimittajat() {
     // Saamme kontin linkkejä varten
     const linkkialue = document.getElementById("links");
     
     const list = document.createElement("ul");

     // Tarkistaa olemassa olevia linkkejä
     const linkit = document.getElementsByClassName("tuotelinkit");
 
     tuotteet.forEach((tuote) => {
         let alreadyExists = false;
 
         // Tarkistetaan linkin olemassaoloa
         for (let j = 0; j < linkit.length; j++) {
             if (
                 linkit[j].href === tuote.toimittajanLinkki ||
                 linkit[j].href === tuote.toimittajanLinkki + "/"
             ) {
                 alreadyExists = true;
                 break;
             }
         }
 
         // Jos linkkiä ei vielä ole, luo se
         if (!alreadyExists) {
             const link = document.createElement("a");
             link.href = tuote.toimittajanLinkki;
             link.textContent = tuote.toimittajanLinkki;
             link.target = "_blank";
             link.className = "tuotelinkit";
 
             const listItem = document.createElement("li");
             listItem.style.marginBottom = "10px";
             listItem.appendChild(link);
             list.appendChild(listItem);
          }
          linkkialue.appendChild(list);
     });
  }
  
  //haeToimittajat();
