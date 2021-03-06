import ExchangeService from './exchangeService.js';

export default class Exchange {
  constructor(base, target, input) {
    this.base = base;
    this.target = target;
    this.input = input;
  }

  async convert() {
    try {
      const rateResponse = await ExchangeService.getPair(this.base, this.target);
      const rate = rateResponse.conversion_rate;
      const conversion = this.input * rate;
      this.rate = rate;
      return conversion;
    } catch (error) {
      return error.message;
    }
  }
  async codeCheck() {
    try {
      const rateResponse = await ExchangeService.getCodes();
      let baseMatch = -1;
      let targetMatch = -1;
      rateResponse.supported_codes.forEach((element) => {
        if (this.base === element[0]) {
          baseMatch = 1;
        }
        if (this.target === element[0]) {
          targetMatch = 1;
        }
      });
      if (baseMatch != 1 || targetMatch != 1) {
        return false;
      } else {
        return true;
      }

    } catch (error) {
      return error.message;
    }
  }
}
