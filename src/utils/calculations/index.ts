import { formatNumber } from "../formatting";

export const calculate24hVolume = (volume: number, price: number) => {
    const currentVolume = formatNumber(volume / price);
    return currentVolume;
};
