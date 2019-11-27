function findLeapYear(year) {
    var start = 1804;
    var arr = []
    for (var i = 0; i < 1000; i++) {
        arr.push(start + (i * 4));
    }
    return arr.includes(year)
}