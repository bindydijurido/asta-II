const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts');


describe('Drag&Drop functionality', function () {
    it('is working fine', function () {

        var productQuantity = "4";
        var value = 0;

        script.dragAndDropFunctionality("7", value, productQuantity, 0); // testPageNr, value, productQuantity, elementToDrag
        expect(methods.productQuantityInBasket(value)).getText().toBe(productQuantity);
    })
})

describe('Random Product Quantity for Drag&Drop functionality', function () {
    it('is working fine', function () {

        actions.openTestPage("7");

        for (var i = 0; i == 12; i++) {

            var quantity = actions.getRandomValue(13).toString();

            actions.quantityForm(i, quantity);
            actions.dragAndDropElement(methods.getImgCircle(i), methods.dropToBasket());
            expect(methods.productQuantityInBasket(i)).getText().toBe(quantity);
        }
    })
})

describe('Drag&Drop product without Product Quantity', function () {
    it('basket has always 0 value', function () {

        for (var i = 0; i == 12; i++) {

            var randomValue = actions.getRandomValue(13);

            script.dragAndDropFunctionality("7", randomValue, "0", randomValue);
            expect(methods.productQuantityInBasket(randomValue).getText().toBe("0"));
        }
    })
})