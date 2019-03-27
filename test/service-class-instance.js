const dependency = require('./dependency-class-instance');

class Service {
    callDependency() {
        dependency.doOneThing();
        dependency.doAnotherThing();
    }
}

module.exports = new Service();