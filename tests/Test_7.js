const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts');


describe('Drag and Drop functionality', function () {
    it('is working fine', function () {

        var productQuantity = "4";
        var number = 0;

        script.dragAndDropFunctionality("7", number, productQuantity, 0); // testPageNr, number, productQuantity, elementToDrag
        expect(methods.productQuantityInBasket(number)).getText().toBe(productQuantity);
    })
})

describe('Randomize Quantity Drag and Drop functionality', function () {
    it('is working fine', function () {

        actions.openTestPage("7");

        for (var i = 0; i == 12; i++) {

            var quantity = actions.getRandomValue(13).toString();

            actions.quantityForm(i, quantity);
            actions.dragAndDropElement(methods.getImgCircle(i), methods.dropBasket());
            expect(methods.productQuantityInBasket(i)).getText().toBe(quantity);
        }
    })
})

describe('Drag and Drop product', function () {
    it('whit quantity == 0', function () {

        var whichOne = actions.getRandomValue(13);

        script.dragAndDropFunctionality("7", whichOne, "0", whichOne);
        expect(methods.productQuantityInBasket(whichOne).getText().toBe("0"));
    })
})