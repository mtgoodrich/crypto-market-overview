import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    pairingTokenName: {
        margin: "2px 0 0",
        color: "#8a8a8a",
        fontSize: "0.6rem",
    },
});

interface TokenNameProps {
    name: string;
}

const TokenName = ({ name }: TokenNameProps) => {
    const classes = useStyles();
    return <div className={classes.pairingTokenName}>{name}ss</div>;
};

export default TokenName;
