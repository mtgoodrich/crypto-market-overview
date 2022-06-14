import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    pairingText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

interface TokenSymbolProps {
    symbol: string;
}

const TokenSymbol = ({ symbol }: TokenSymbolProps) => {
    const classes = useStyles();
    return <div className={classes.pairingText}>{symbol}-USD</div>;
};

export default TokenSymbol;
