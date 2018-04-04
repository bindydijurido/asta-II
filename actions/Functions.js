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

    dragAndDropElement: function(elem, target) {
        return browser.actions().dragAndDrop(elem,target).mouseUp().perform();
    },

    quantityForm: function(number, productQuantity) {
        return element(by.className('form-control')[number]).sendKeys(productQuantity);
    },

    getRandomValue: function(maximumValueMinusOne) {
        return Math.floor(Math.random() * maximumValueMinusOne);
    }
}