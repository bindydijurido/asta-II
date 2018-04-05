const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts')

describe('Login&Psswd', function () {
    it('entered correctly', function () {

        script.provideFormData("6", "tester", "123-xyz");
        actions.clickLogoutUserLink(false);
        expect(methods.logOutBttn()).getText().toBe('Wyloguj');
    })
})


describe('Login&Psswd', function () {
    it('entered wrong data', function () {

        script.provideFormData("6", "tester", "123")
        expect(methods.wrongLoginDataAlert()).getText().toBe('Nieprawidłowe dane logowania');
    })
})

describe('Download file', function () {
    it('to default directory', function () {

        script.provideFormData("6", "tester", "123-xyz")
        actions.downloadFileLink();
    })
})

describe('Logout user functionality', function () {
    it('is working fine!', function () {

        script.provideFormData("6", "tester", "123-xyz")
        actions.clickLogoutUserLink(true);
        expect(methods.loginBttn()).getText().toBe('Login');
    })
})
