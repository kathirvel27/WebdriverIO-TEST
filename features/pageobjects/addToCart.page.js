//import common.page
const Page = require('./common.page');


class AddToCartPage extends Page {
    get men() {
        return $('#ui-id-5');
    }

    get tops() {
        return $('#ui-id-17');
    }

    get jackets() {
        return $('#ui-id-19');
    }

    get jacket() {
        return $("(//img[@alt='Typhon Performance Fleece-lined Jacket'])[1]");
    }

    get size() {
        return $("(//div[@id='option-label-size-143-item-167'])[1]");
    }

    get color() {
        return $("(//div[@id='option-label-color-93-item-58'])[1]");
    }

    get addtocart() {
        return $('#product-addtocart-button');
    }
    
 
    //I am select the category
     async selectCategory() {
        await this.men.moveTo();
        await this.tops.moveTo();
        await this.jackets.click();
     }

     //I am choose the one product
     async chooseProduct() {
        await this.jacket.click();
     }

     //I select the size and color
     async selectSizeAndColor() {
        await this.size.click();
        await this.color.click();
     }

     // I click on add to cart
     async clickAddToCart() {
        await this.addtocart.click();
     }


    


    open () {
        super.open();
        browser.maximizeWindow();
    }
}

module.exports = new AddToCartPage();
