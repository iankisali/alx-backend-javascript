const assert = require('assert')
const { it, describe } = require('mocha')
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('Checking sum', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('Checking subtraction', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('Cheking division', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('Checking division by zero', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error;');
    });
    it('Checking wrong command 1', () => {
        assert.equal(calculateNumber(5, 1.4, 4), 'Error');
    });
    it('Checking wrong command 2', () => {
        assert.equal(calculateNumber('wrongCommand', 1.4, 4.5), 'Error');
    });
});
