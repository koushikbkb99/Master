const TestHomePage = require("../Page/Homepage")
const SearchpageCeasers = require("../Page/searchPage")
const dynDate = require("../utilities/common")
var assert = require('assert')
var today = new Date();

describe("Test booking for a perticular date", function () {
    browser.url("https://www.caesars.com/");
    it("enter destination Select visible txt", function () {
        TestHomePage.SelectDestination()
        const DestinationText = TestHomePage.selectByViText("Paris Las Vegas");
        console.log(DestinationText)
        TestHomePage.setFromToDate(today);
        TestHomePage.booknowClick()
        const destText = SearchpageCeasers.getTextSearch()
        console.log(destText)
        assert.equal(DestinationText, destText)
        SearchpageCeasers.seeRatesClick();
        SearchpageCeasers.ContToBookClick();
        browser.pause(15000)
    });

});

