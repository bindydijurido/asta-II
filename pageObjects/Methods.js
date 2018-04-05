module.exports = {

    logOutBttn: function () {
        return browser.findElement(By.xpath('//*[@id="logout"]'));
    },

    loginBttn: function () {
        return element(by.id('LoginForm_save'));
    },

    loginFormUserName: function (loginData) {
        return element(by.id('LoginForm__username')).sendKeys(loginData);
    },

    loginFormUserPsswd: function (psswdData) {
        return element(by.id('LoginForm__password')).sendKeys(psswdData);
    },

    downloadFileUrl: function () {
        return browser.findElement(By.xpath('/html/body/div/div/div[2]/div[2]/a')).click();
    },

    wrongLoginDataAlert: function () {
        return browser.findElement(By.xpath('/html/body/div/div/div[2]/div[1]/div/ul/li'));
    },

    getImgCircle: function (number) {
        return element(by.className('img-circle')[number]);
    },

    dropBasket: function () {
        return element(by.className('col-md-12 place-to-drop ui-droppable'));
    },

    dragAndDropAction: function (elem, target) {
        return browser.actions().dragAndDrop(elem, target).mouseUp().perform();
    },

    quantityFormPointer: function (number, productQuantity) {
        return element(by.className('form-control')[number]).sendKeys(productQuantity);
    },

    productQuantityInBasket: function (number) {
        return element(by.className('row-in-basket-quantity')[number]);
    },

    paymentClarificationAlert: function () {
        return browser.findElement(By.xpath('/html/body/div/div/div[2]/div/div/ul/li'));
    },

    payButton: function () {
        return element(by.className('task8_form[save]'));
    },

    cardForm: function (formPointer) {
        return element.findElements(by.tagName(formPointer));
    },

    userFormName: function (nameSurname) {
        return element(by.id('task8_form_name')).sendKeys(nameSurname);
    },

    cardNumberForm: function (cardNumber) {
        return element(by.id('task8_form_cardNumber')).sendKeys(cardNumber);
    },

    cardCvvForm: function (cvvNumber) {
        return element(by.id('task8_form_cardCvv')).sendKeys(cvvNumber);
    }
}