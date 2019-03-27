const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
chai.config.includeStack = true;

global.expect = chai.expect;
global.should = should;
global.sinon = sinon;
