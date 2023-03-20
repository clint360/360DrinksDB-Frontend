export function isValidMobileNumber(mobile_number) {
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    console.log(regex.test(mobile_number))
    
    if (mobile_number === null) {
        return "false";
    } else {
    if (regex.test(mobile_number) === true) {
        return "true";
    } 
    else {
        return "false";
    }
}
}