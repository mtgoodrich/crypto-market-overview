import { createUseStyles } from "react-jss";
import { checkForLoss } from "../utils/booleanChecks";

const useStyles = createUseStyles({
    pairingPriceChange: {
        margin: "2px 0 0",
        color: "green",
        fontSize: "0.6rem",
    },
    priceLoss: {
        color: "#be6240",
    },
});

interface TokenPriceChangeProps {
    priceChange: number;
}

const TokenPriceChange = ({ priceChange }: TokenPriceChangeProps) => {
    const classes = useStyles();
    return (
        <div
            className={`${classes.pairingPriceChange} ${
                checkForLoss(priceChange) && classes.priceLoss
            }`}
        >
            {priceChange}%
        </div>
    );
};

export default TokenPriceChange;
