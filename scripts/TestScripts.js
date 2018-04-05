const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');

module.exports = {

    provideFormData: function (testPageNr, loginData, psswdData) {
        actions.openTestPage(testPageNr);
        actions.provideDataToLoginForm(loginData);
        actions.provideDataToPsswdForm(psswdData);
        actions.clickLoginBttn();
    },

    dragAndDropFunctionality: function (testPageNr, number, productQuantity, elementToDrag) {

        actions.openTestPage(testPageNr);
        actions.quantityForm(number, productQuantity);
        actions.dragAndDropElement(methods.getImgCircle(elementToDrag), methods.dropToBasket());
    },

    fulfillPaymentForms: function (testPageNr, cardTypeName, clientSurname, cardNumber, cvvNumber, cardMonth, cardYear) {

        actions.openTestPage(testPageNr);
        selectDropdownByName(cardTypeName);
        actions.nameSurnameForm(clientSurname);
        actions.cardNumber(cardNumber);
        actions.cvvNumber(cvvNumber);
        selectDropdownByMonth(cardMonth);
        selectDropdownByYear(cardYear);
        methods.payButton().click();
    }
}