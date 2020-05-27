const dynaMicDate  = require("../utilities/common")

class caesarsHomePage {
       
        get selDd() { return $("//div[@class='cet-booker__bar-content__destination']") }
        get pickAPlace() { return ('//ul/li[text() = "DestinationName"]')}
        get fromDate() { return ('//div[@aria-label="fd"]') }
        get toDate() { return ('//div[@aria-label = "td"]') }
        get bookNow() { return $("//div[@class= 'link-button link-button--primary lg-button']") }

        
         SelectDestination() {
                this.selDd.click()
                browser.pause(3000) 
        }

        selectByViText(text){
                const destinationText = this.pickAPlace.replace("DestinationName", text);
                $(destinationText).click();
                $(destinationText).click();
                return text.toUpperCase();
        }
        setFromToDate(today){ 
                var dates = dynaMicDate.dateFormat(today, 35, 5);
                const fromDateText = this.fromDate.replace("fd", dates.fromDate);
                $(fromDateText).click();
                browser.pause(5000);
                const toDateText = this.toDate.replace("td", dates.toDate);
                $(toDateText).click();
                browser.pause(5000);
        }
       
        booknowClick() {
                this.bookNow.click();
                browser.pause(5000);
        }

}

module.exports = new caesarsHomePage();
