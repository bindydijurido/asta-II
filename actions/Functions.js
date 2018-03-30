const methods = require('pageObjects/Methods');

module.exports = {

    openTestSixPage: function () {
        return browser.waitForAngularEnabled(false);
        browser.get('https://testingcup.pgs-soft.com/task_6');
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
    }
}