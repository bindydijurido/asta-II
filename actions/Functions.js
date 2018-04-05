const methods = require('pageObjects/Methods');

module.exports = {

    openTestPage: function (route) {
        return browser.waitForAngularEnabled(false);
        browser.get('https://testingcup.pgs-soft.com/task_' + route);
    },

    clickLoginBttn: function () {
        return methods.loginBttn().click();
    },

    provideDataToLoginForm: function (loginData) {
        return methods.loginFormUserName(loginData);
    },

    provideDataToPsswdForm: function (psswdData) {
        return methods.loginFormUserPsswd(psswdData);
    },

    downloadFileLink: function () {
        return methods.downloadFileUrl();
    },

    clickLogoutUserLink: function (click) {
        return

        if (click == true) {
            methods.logOutBttn().click();
        } else {
            expect(methods.logOutBttn()).getText().toBe('Wyloguj');
        }
    },

    dragAndDropElement: function (elem, target) {
        return methods.dragAndDropAction(elem, target);
    },

    quantityForm: function (number, productQuantity) {
        return methods.quantityFormPointer(number, productQuantity);
    },

    getRandomValue: function (maximumValueMinusOne) {
        return Math.floor(Math.random() * maximumValueMinusOne);
    },

    let: selectDropdownByName = function (optionName) {
        if (optionName) {
            var options = methods.cardForm('task8_form[cardType]')
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    },

    nameSurnameForm: function (nameSurname) {
        return methods.userFormName(nameSurname);
    },

    cardNumber: function (cardNumber) {
        return methods.cardNumberForm(cardNumber);
    },

    cvvNumber: function (cvvNumber) {
        return methods.cardCvvForm(cvvNumber);
    },

    let: selectDropdownByMonth = function (optionName) {
        if (optionName) {
            var options = methods.cardForm('task8_form[cardInfo][month]')
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    },

    let: selectDropdownByYear = function (optionName) {
        if (optionName) {
            var options = methods.cardForm('task8_form[cardInfo][year]')
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    }
}