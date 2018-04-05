const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');

describe('Payment via Bank Visa Card', function () {
    it('is working fine', function () {

        actions.openTestPage("8");
        selectDropdownByName("vs");

        actions.nameSurnameForm("Jan Kowalski");
        actions.cardNumber("4111111111111111");
        actions.cvvNumber("123");

        selectDropdownByMonth("January");
        selectDropdownByYear("2019");

        actions.payButton().click();

        expect(actions.paymentClarificationAlert()).getText().toBe(' Zamówienie opłacone');
    })
})