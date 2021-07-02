import ExchangeService from './exchangeService.js';

export default class Exchange {
  constructor(base, target, input) {
    this.base = base;
    this.target = target;
    this.input = input;
  }

  convert() {
    const rateResponse = ExchangeService.getPair(this.base, this.target);
    let rate = rateResponse.conversion_rate;
    return this.input * rate;
  }
}
