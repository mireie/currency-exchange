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
    } catch(error) {
      return error.message;
    }
  }
}
