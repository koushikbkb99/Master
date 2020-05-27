class dynamicDate{
    
    dateFormat(inputDate, fromDays, toDays){
        inputDate.setDate(inputDate.getDate() + fromDays);
        var stringFromDate = inputDate.toString();
        var splitFromDate = stringFromDate.slice(0, 15);
        //var fromDate = splitFromDate;
        inputDate.setDate(inputDate.getDate() + toDays);
        var toStringDate = inputDate.toString();
        var splitToDate = toStringDate.slice(0, 15);
       // var toDate = splitToDate;
        var dateObj = {
            fromDate : splitFromDate,
            toDate : splitToDate
        }
        console.log(dateObj);
        return dateObj;
}
}
module.exports = new dynamicDate();