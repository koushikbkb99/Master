const SearchpageCeasers = require("../Page/searchPage")

class searchPage {
 //get pickAPlacenew() { return ('//ul/li[text() = "DestinationName"]')}
 get destText() { return $("//div[contains(@class,  'BookingSearchSummary')]/h4") }
 get seeRates() { return $("(//button[@data-label='SeeRatesButton'])[1]") }
 get contToBook() { return $("(//button[@data-label='ContinueToBookButton'])") }

 getTextSearch(){      
    return this.destText.getText().toUpperCase();   
}

seeRatesClick() {
     this.seeRates.click();
}
ContToBookClick() {
     this.contToBook.click()

}
}


module.exports = new searchPage();