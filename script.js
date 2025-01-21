//JSON-dataa
const tuotteet = [
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
  ];
  //function jokaa laskee kate
  function laskeKate(ostohinta, myyntihinta) {
    const kate = ((myyntihinta - ostohinta) / ostohinta) * 100;
    return kate;
  }
  for (let i = 0; i < tuotteet.length; i++) {
    const tuote = tuotteet[i];
    const kate = laskeKate(tuote.ostohinta, tuote.myyntihinta);
    console.log(`Tuote: ${tuote.tuotenimi}`);
    console.log(`Kate: ${kate.toFixed(2)}%`);
    console.log(`Toimittajan linkki: ${tuote.toimittajanLinkki}`);
    console.log("----------------------------------------");
    tuote.kate = kate.toFixed(2);
    console.log(tuote);
  }