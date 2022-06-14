import { createUseStyles } from "react-jss";
import { formatCurrency } from "../utils/formatting";

const useStyles = createUseStyles({
    pairingPrice: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

interface TokenPairingPriceProps {
    currentPrice: number;
}

const TokenPairingPrice = ({ currentPrice }: TokenPairingPriceProps) => {
    const classes = useStyles();
    return (
        <div className={classes.pairingPrice}>
            {formatCurrency(currentPrice)}
        </div>
    );
};

export default TokenPairingPrice;
