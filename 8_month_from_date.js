function month_name(date){
    let dateInt = 0;
    dateInt = date.getMonth();

    switch(dateInt){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
    return "Something went wrong";
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));