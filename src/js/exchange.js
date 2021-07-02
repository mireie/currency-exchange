export default class Exchange {
  constructor(base, target, rate, input) {
    this.base = base;
    this.target = target;
    this.rate = rate;
    this.input = input;
  }

  convert() {
    return this.input * this.rate;
  }
}
