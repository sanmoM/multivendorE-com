export function isValidBDNumber(number) {
    const regex = /^01[3-9]\d{8}$/;
    return regex.test(number);
}

export const handleMobileNumberChange = (value) => {
    // remove everything except numbers
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    if (onlyNumbers.length <= 11) {
        return onlyNumbers;
    } else {
        return onlyNumbers.slice(0, 11);
    }
};