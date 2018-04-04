const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');

describe('Drag and Drop functionality', function() {
    it('is working fine', function () {

        actions.openTestPage("7");
        actions.quantityForm(0, "4");
        actions.dragAndDropElement(methods.getImgCircle(1), methods.dropBasket());

        expect(methods.productQuantityInBasket(0)).getText().toBe("4");
    })
})