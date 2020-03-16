module.exports = class {
  constructor(parameters) {
    if (parameters) {
      this.id = parameters.id;
      this.name = parameters.name;
    }
  }
}