const actions = require('actions/Functions');
const methods = require('pageObjects/Methods');
const script = require('scripts/TestScripts');


describe('Drag&Drop functionality', function () {
    it('is working fine', function () {

        var productQuantity = "4";
        var number = 0;

        script.dragAndDropFunctionality("7", number, productQuantity, 0); // testPageNr, number, productQuantity, elementToDrag
        expect(methods.productQuantityInBasket(number)).getText().toBe(productQuantity);
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
    it('has always 0 value', function () {

        var randomValue = actions.getRandomValue(13);

        script.dragAndDropFunctionality("7", randomValue, "0", randomValue);
        expect(methods.productQuantityInBasket(randomValue).getText().toBe("0"));
    })
})