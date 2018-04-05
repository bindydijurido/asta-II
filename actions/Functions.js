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
        return
        element(by.id('LoginForm__username')).sendKeys(loginData);
    },

    provideDataToPsswdForm: function (psswdData) {
        return
        element(by.id('LoginForm__username')).sendKeys(psswdData);
    },

    downloadFileLink: function () {
        return
        browser.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/a')).click();
    },

    clickLogoutUserLink: function (click) {
        return

        if (click == true) {
            browser.findElement(By.xpath('//*[@id="logout"]')).click();
        } else {
            expect(methods.logOutBttn()).getText().toBe('Wyloguj');
        }
    },

    dragAndDropElement: function (elem, target) {
        return browser.actions().dragAndDrop(elem, target).mouseUp().perform();
    },

    quantityForm: function (number, productQuantity) {
        return element(by.className('form-control')[number]).sendKeys(productQuantity);
    },

    getRandomValue: function (maximumValueMinusOne) {
        return Math.floor(Math.random() * maximumValueMinusOne);
    },

    var: selectDropdownByName = function (optionName) {
        if (optionName) {
            var options = element.findElements(by.tagName('task8_form[cardType]'))
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    },

    nameSurnameForm: function (nameSurname) {
        return element(by.id('task8_form_name')).sendKeys(nameSurname);
    },

    cardNumber: function (cardNumber) {
        return element(by.id('task8_form_cardNumber')).sendKeys(cardNumber);
    },

    cvvNumber: function (cvvNumber) {
        return element(by.id('task8_form_cardCvv')).sendKeys(cvvNumber);
    },

    var: selectDropdownByMonth = function (optionName) {
        if (optionName) {
            var options = element.findElements(by.tagName('task8_form[cardInfo][month]'))
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    },

    var: selectDropdownByYear = function (optionName) {
        if (optionName) {
            var options = element.findElements(by.tagName('task8_form[cardInfo][year]'))
                .then(function (optionName) {
                    options[optionName].click();
                });
        }
    }
}