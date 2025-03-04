
//  HTML input date formater
export function formatDateForInput(mmddyyyy) {
    if(!mmddyyyy || mmddyyyy.length !== 8) {return null}
    const year = mmddyyyy.slice(4);
    const month = mmddyyyy.slice(0,2);
    const day = mmddyyyy.slice(2,4);
    return `${year}-${month}-${day}`;
}

export function formatDateForStorage(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return month + day + year;
}

// Convert from MMDDYYYY to displayable MM/DD/YYYY
export function formatDateForDisplay(mmddyyyy) {
    if (!mmddyyyy || mmddyyyy.length !== 8) return mmddyyyy;
    const month = mmddyyyy.slice(0, 2);
    const day = mmddyyyy.slice(2, 4);
    const year = mmddyyyy.slice(4);
    return `${month}/${day}/${year}`;
}

// Validate MMDDYYYY format
export function isValidDateFormat(date) {
    if (!date) return false;
    const regex = /^(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{4}$/;
    return regex.test(date);
}