const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts');
const functions = require('actions/Functions');

describe('Payment via Bank Visa Card', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("vs", "Jan Kowalski", "4111111111111111", "024", "January", "2019");
        // testPageNr, cardTypeName, clientSurname, cardNumber, cvvNumber, cardMonth, cardYear
        expect(methods.paymentClarificationAlert()).getText().toBe(' Zamówienie opłacone');
    })
});

describe('Payment via Bank American Express', function() {
    it('is working properly', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("ae", "John Smith", "378282246310005", "005", "February", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via American Express Corporate', function() {
    it('is working fine', function() {

        functions.openTestPage("8");

        script.fulfillPaymentForms("aec", "Adam Hammer", "378734493671000", "151", "March", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
})

describe('Payment via Australian BankCard', function () {
    it('is working fine', function() {

        functions.openTestPage("8");

        script.fulfillPaymentForms("abc", "John Smith", "5610591081018250", "542", "June", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Diners Club', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("dc", "Adam Kowalski", "30569309025904", "432", "November", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Discover', function () {
    it('is working goooood', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("ds", "Janusz Biznesu", "6011111111111117", "029", "December", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via JBC', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("jb", "Jan Kowalski", "3566002020360505", "512", "March", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Master Card', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("mc", "Agnieszka Nowak", "5105105105105100", "023", "May", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Visa', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("vs", "Hanna Nier", "4012888888881881", "041", "May", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Dankort (PBS)', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms("df", "Jan Pikachu", "76009244561", "123", "May", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});

describe('Payment via Switch/Solo (Paymentech)', function () {
    it('is working fine', function () {

        functions.openTestPage("8");

        script.fulfillPaymentForms('ss', "Hans Laumer", "Switch/Solo (Paymentech)", "523", "April", "2019");
        expect(methods.paymentClarificationAlert().getText().toBe(' Zamówienie opłacone'));
    })
});