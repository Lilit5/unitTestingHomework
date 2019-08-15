const Calculator = require('../../app/Calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe("multiply",function(){
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'multiply');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 24 when called with numbers 4,6', function () {
       expect(calculator.multiply(4,6)).to.be.equal(24);
    });

    it('should return 2572404 when called with numbers 4561, 564', function () {
        expect(calculator.multiply(4561, 564)).to.be.equal(2572404);
    });
    it('should throw an error if provided with not number arguments', function () {
        let callWithError = () => calculator.multiply("Not a number");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Some of given parameters are not numbers!")
    });
})