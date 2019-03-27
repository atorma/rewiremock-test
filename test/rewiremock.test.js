describe('rewiremock callThrough', function() {
  const rewiremock = require('rewiremock/node');

  let stubs;

  beforeEach(function () {
    stubs = {
      doAnotherThing: sinon.stub()
    };
  });

  describe('should call through when dependency is a plain object', function () {
    let serviceUnderTest;

    beforeEach(function() {
      serviceUnderTest = rewiremock.proxy('./service', r => ({
        './dependency': r.callThrough().with(stubs)
      }));
    });

    it('should call through', function() {
      serviceUnderTest.callDependency();
      stubs.doAnotherThing.should.have.been.called;
    });
  });

  describe('should call through when service and dependency are class instances', function () {
    let serviceUnderTest;

    beforeEach(function() {
      serviceUnderTest = rewiremock.proxy('./service-class-instance', r => ({
        './dependency-class-instance': r.callThrough().with(stubs)
      }));
    });

    it('should call through', function() {
      serviceUnderTest.callDependency();
      stubs.doAnotherThing.should.have.been.called;
    });
  });
});
