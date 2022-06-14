import { billionsCheck, billionThreshhold } from "../constants";

export const formatCurrency = (num: number) => {
    const formattedCurrency = num.toLocaleString(undefined, {
        style: "currency",
        currency: "USD",
    });
    return formattedCurrency;
};

export const formatBillions = (num: number) => {
    const bs = Math.sign(num) * (Math.abs(num) / billionThreshhold);
    return bs.toFixed(2) + "B";
};

export const formatNumber = (num: number) => {
    if (Math.abs(num) > billionsCheck) return formatBillions(num);
    const formattedNumber = num.toLocaleString(undefined, {
        maximumFractionDigits: 0,
    });
    return formattedNumber;
};
