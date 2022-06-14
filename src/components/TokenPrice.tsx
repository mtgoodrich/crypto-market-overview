import TokenPairingPrice from "./TokenPairingPrice";
import TokenPriceChange from "./TokenPriceChange";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    pairingDisplay: {
        minWidth: "75px",
        margin: "0 5px",
        fontSize: "0.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        flex: 1,
    },
    [`@media (min-width: 480px)`]: {
        pairingDisplay: {
            minWidth: "95px",
            margin: "0 10px",
            fontSize: "1rem",
        },
    },
});

interface TokenPriceProps {
    classProps: string;
    priceChange: number;
    currentPrice: number;
}

const TokenPrice = ({
    priceChange,
    currentPrice,
    classProps,
}: TokenPriceProps) => {
    const classes = useStyles();
    return (
        <div
            className={`${classProps} ${classes.pairingDisplay}`}
            data-testid="pairing-wrapper"
        >
            <TokenPairingPrice currentPrice={currentPrice} />
            <TokenPriceChange priceChange={priceChange} />
        </div>
    );
};

export default TokenPrice;
