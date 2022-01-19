const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://api.blockchain.info/ticker').then((response) =>
    response.json().then((btcJson) => {
      btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    }),
  );
}

fetchBtc();
