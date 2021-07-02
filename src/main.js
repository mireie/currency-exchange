import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';
// import Exchange from './js/exchange.js';

function getCodes(response) {
  if(response.result ==="success") {
    console.log(response);
  }
}

async function apiCodes() {
  const response = await ExchangeService.getCodes();
  getCodes(response);
}

$(document).ready(()=> {
  apiCodes();
});