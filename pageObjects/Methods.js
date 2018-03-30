module.exports = {

    logOutBttn: function() {
        return browser.findElement(By.xpath('//*[@id="logout"]'));
    },

    loginBttn: function() {
        return element(by.id('LoginForm_save'));
    },

    wrongLoginDataAlert: function() {
        return browser.findElement(By.xpath('/html/body/div/div/div[2]/div[1]/div/ul/li'));
    }
}