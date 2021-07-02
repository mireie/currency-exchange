export default class Exchange {

  codes(response) {
    if (response.result === "success") {
      return response.supported_codes;
    }
    else {
      return `There was an error: ${response.error}`;
    }
  }
}