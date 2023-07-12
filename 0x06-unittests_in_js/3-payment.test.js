const sinon = require('sinon')
const { expect } = require('chai');

const util = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');


describe('', () => {
    it('Validating utils', () => {
        const check = sinon.spy(util, 'calculateNumber');
        sendPaymentRequestToApi(1, 3);
        expect(check.calledOnce).to.be.true;
        expect(check.calledWith('SUM', 1, 3)).to.be.true;
        check.restore();
    });
});
