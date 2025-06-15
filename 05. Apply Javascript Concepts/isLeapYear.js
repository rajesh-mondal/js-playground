function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const isLiYe = isLeapYear(2024);
console.log(isLiYe);