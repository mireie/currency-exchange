import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';
// import Exchange from './js/exchange.js';

function getCodes(response) {
  if(response.result ==="success") {
    let codeArray = response.supported_codes;
    codeArray.forEach(element => {
      $('#currency-selector-from').append(`<option value="${element[0]}">${element[0]} - ${element[1]}</option>`)
      $('#currency-selector-to').append(`<option value="${element[0]}">${element[0]} - ${element[1]}</option>`)
    });
  }
}

async function apiCodes() {
  const response = await ExchangeService.getCodes();
  getCodes(response);
}

$(document).ready(()=> {
  apiCodes();
});