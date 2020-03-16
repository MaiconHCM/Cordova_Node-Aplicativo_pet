module.exports = class {
  constructor(parameters) {
    if (parameters) {
      if (parameters.id) this.id = parameters.id;
      this.username = parameters.username;
      this.password = parameters.password;
      this.name = parameters.name
    }
  }
}