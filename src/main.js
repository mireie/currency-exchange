import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';
import Exchange from './js/exchange.js';

function getCodes(response) {
  if (response.result === "success") {
    let codeArray = response.supported_codes;
    codeArray.forEach(element => {
      $('#currency-selector-base').append(`<option value="${element[0]}">${element[0]} - ${element[1]}</option>`);
      $('#currency-selector-target').append(`<option value="${element[0]}">${element[0]} - ${element[1]}</option>`);
    });
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`);
    $('.showErrors').slideToggle();
  }
}

async function apiCodes() {
  const response = await ExchangeService.getCodes();
  getCodes(response);
}


$(document).ready(() => {
  apiCodes();
  $('#submit').click(async (event) => {
    event.preventDefault();
    let base = $('#currency-selector-base').val();
    let target = $('#currency-selector-target').val();
    let input = $('#currency-input').val();
    let userInput = new Exchange(base, target, input);
    let conversion = await userInput.convert();
    $('#output').text(`${conversion}`);
  });
});