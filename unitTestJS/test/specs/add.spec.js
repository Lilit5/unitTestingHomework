const Calculator = require('../../app/Calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe("add",function(){
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'add');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 10 when called with numbers 4,6', function () {
       expect(calculator.add(4,6)).to.be.equal(10);
    });

    it('should return 5125 when called with numbers 4561, 564', function () {
        expect(calculator.add(4561, 564)).to.be.equal(5125);
    });
    it('should throw an error if provided with not number arguments', function () {
        let callWithError = () => calculator.add("Not a number");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw("Some of given parameters are not numbers!")
    });
})