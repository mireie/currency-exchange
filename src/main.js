import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';
import Exchange from './js/exchange.js';

async function apiCodes() {
  const response = await ExchangeService.getCodes();
  getCodes(response);
}

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

function showIfHidden() {
  const div = document.getElementById("output-card");
  if (window.getComputedStyle(div).display === "none") {
    $('#output-card').fadeToggle();
  }
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
    showIfHidden();
    $('#output').text(`${conversion.toFixed(2)} ${userInput.target}`);
    $('#cs-base').text(`${input} ${userInput.base}`);
    $('#cs-target').text(`${conversion.toFixed(2)} ${userInput.target}`);
    $('#cs-rate').text(`${userInput.rate}`);
  });
});