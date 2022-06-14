import TokenSymbol from "./TokenSymbol";
import TokenName from "./TokenName";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    pairingDisplay: {
        minWidth: "75px",
        margin: "0 5px",
        fontSize: "0.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    pairingText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    pairingTokenName: {
        margin: "2px 0 0",
        color: "#8a8a8a",
        fontSize: "0.6rem",
    },
    [`@media (min-width: 480px)`]: {
        pairingDisplay: {
            minWidth: "95px",
            margin: "0 10px",
            fontSize: "1rem",
        },
    },
});

interface TokenPairingProps {
    classProps: string;
    name: string;
    symbol: string;
}

const TokenPairing = ({ name, symbol, classProps }: TokenPairingProps) => {
    const classes = useStyles();
    return (
        <div
            className={`${classProps} ${classes.pairingDisplay}`}
            data-testid="pairing-wrapper"
        >
            <TokenSymbol symbol={symbol} />
            <TokenName name={name} />
        </div>
    );
};

export default TokenPairing;
