const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts');

describe('Payment via Bank Visa Card', function () {
    it('is working fine', function () {

        script.fulfillPaymentForms("8", "vs", "Jan Kowalski", "4111111111111111", "123", "January", "2019");
        // testPageNr, cardTypeName, clientSurname, cardNumber, cvvNumber, cardMonth, cardYear
        expect(methods.paymentClarificationAlert()).getText().toBe(' Zamówienie opłacone');
    })
})
