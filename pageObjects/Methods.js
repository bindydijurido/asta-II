module.exports = {

    logOutBttn: function() {
        return browser.findElement(By.xpath('//*[@id="logout"]'));
    },

    loginBttn: function() {
        return element(by.id('LoginForm_save'));
    },

    wrongLoginDataAlert: function() {
        return browser.findElement(By.xpath('/html/body/div/div/div[2]/div[1]/div/ul/li'));
    },

    getImgCircle: function(number) {
        return element(by.className('img-circle')[number]);
    },

    dropBasket: function() {
        return element(by.className('col-md-12 place-to-drop ui-droppable'));
    },

    productQuantityInBasket: function(number) {
        return element(by.className('row-in-basket-quantity')[number]);
    }
}