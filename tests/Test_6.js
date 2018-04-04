const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');

describe('Login&Psswd', function () {
    it('entered correctly', function () {

        actions.openTestPage("6");
        actions.provideDataToLoginForm("tester");
        actions.provideDataToPsswdForm("123-xyz");
        actions.clickLoginBttn();
        actions.clickLogoutUserLink(false);

        expect(methods.logOutBttn()).getText().toBe('Wyloguj');
    })
})


describe('Login&Psswd', function () {
    it('entered wrong data', function () {

        actions.openTestSixPage();
        actions.provideDataToLoginForm("tester");
        actions.provideDataToPsswdForm("123");
        actions.clickLoginBttn();

        expect(methods.wrongLoginDataAlert()).getText().toBe('Nieprawidłowe dane logowania');
    })
})

describe('Download file', function () {
    it('to default directory', function () {

        actions.openTestSixPage();
        actions.provideDataToLoginForm("tester");
        actions.provideDataToPsswdForm("123-xyz");
        actions.clickLoginBttn();
        actions.downloadFileLink();
    })
})

describe('Logout user functionality', function () {
    it('is working fine!', function () {

        actions.openTestSixPage();
        actions.provideDataToLoginForm("tester");
        actions.provideDataToPsswdForm("123-xyz");
        actions.clickLoginBttn();
        actions.clickLogoutUserLink(true);

        expect(methods.loginBttn()).getText().toBe('Login');
    })
})