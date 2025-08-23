export function isValidBDNumber(number) {
    const regex = /^01[3-9]\d{8}$/;
    return regex.test(number);
}