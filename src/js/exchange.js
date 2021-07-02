export default class ExchangeRates {

  getCodes(response) {
    if (response.result === "success") {
      return codes = reponse.supported_codes;
    }
    else {
      return `There was an error: ${response.error}`;
    }
  }
}