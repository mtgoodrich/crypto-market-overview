import { createUseStyles } from "react-jss";
import { calculate24hVolume } from "../utils/calculations";

const useStyles = createUseStyles({
    pairingDisplay: {
        minWidth: "75px",
        margin: "0 5px",
        fontSize: "0.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    pairingText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    pairingTokenName: {
        margin: "2px 0 0",
        color: "#8a8a8a",
        fontSize: "0.7rem",
    },
    [`@media (min-width: 480px)`]: {
        pairingDisplay: {
            minWidth: "95px",
            margin: "0 10px",
            fontSize: "1rem",
        },
    },
});

interface TokenVolumeProps {
    classProps: string;
    volume: number;
    price: number;
    symbol: string;
}

const TokenVolume = ({
    volume,
    price,
    symbol,
    classProps,
}: TokenVolumeProps) => {
    const classes = useStyles();
    return (
        <div
            className={`${classProps} ${classes.pairingDisplay}`}
            data-testid="pairing-wrapper"
        >
            <div className={classes.pairingText}>
                {calculate24hVolume(volume, price)} {symbol}
            </div>
            <div className={classes.pairingTokenName}>24h volume</div>
        </div>
    );
};

export default TokenVolume;
