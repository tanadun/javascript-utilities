//params YYYY-MM-DD, YYYY-MM  in christ year format
//return DD/MM/YYYY, MM/YYYY 
function toThai(christDate) {
    let str = "";
    if (christDate) {
        let arr = christDate.split('-');
        let year = Number(arr[0]) + 543;

        if (arr.length === 3) {
            str = `${arr[2].padStart(2, "0")}/`
        }
        str += `${arr[1].padStart(2, "0")}/${year.toString()}`
    }

    return str;
}

//params DD/MM/YYYY, MM/YYYY   in thai year format
//return YYYY-MM-DD, YYYY-MM 
function toChist(thaiDate) {
    let str = "";
    if (thaiDate) {
        let arr = thaiDate.split('/');

        if (arr.length === 3) {
            str = `${arr[0].padStart(2, "0")}`
            arr.splice(0, 1)
        }
        let year = Number(arr[1]) - 543;
        str = `${year.toString()}-${arr[0].padStart(2, "0")}-${str}`
    }

    return str;
}
