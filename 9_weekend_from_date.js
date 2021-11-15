function is_weekend(date){
    dateObj = new Date(date);
    let dateInt = 0;
    dateInt = dateObj.getDay();

    /*switch(dateInt){
        case 0:
            return "Monday";
        case 1:
            return "Tuesday";
        case 2:
            return "Wednesday";
        case 3:
            return "Thursday";
        case 4:
            return "Friday";
        case 5:
            return "Saturday";
        case 6:
            return "Sunday";
    }
    return "Something went wrong";*/
    if(dateInt === 6 || dateInt === 0){
        return "weekend";
    }
}

console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));