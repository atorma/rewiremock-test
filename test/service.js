const dependency = require('./dependency');

module.exports = {
  callDependency() {
    dependency.doOneThing();
    dependency.doAnotherThing();
  }
};
