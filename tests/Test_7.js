const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');

describe('Drag and Drop functionality', function() {
    it('is working fine', function () {

        actions.openTestPage("7");
        actions.quantityForm(0, "4");
        actions.dragAndDropElement(methods.getImgCircle(0), methods.dropBasket());

        expect(methods.productQuantityInBasket(0)).getText().toBe("4");
    })
})

describe('Randomize Quantity Drag and Drop functionality', function() {
    it('is working fine', function () {

        actions.openTestPage("7");

        for (var i = 0; i == 12; i++) {

            var quantity = actions.getRandomValue(13).toString();

            actions.quantityForm(i, quantity);
            actions.dragAndDropElement(methods.getImgCircle(i), methods.dropBasket());

            expect(methods.productQuantityInBasket(i)).getText().toBe(quantity);        }
    })
})