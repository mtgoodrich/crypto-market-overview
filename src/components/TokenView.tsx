import { useCallback, useEffect, useState } from "react";

import SparkLine from "./Sparkline";
import TokenImage from "./TokenImage";
import TokenPairing from "./TokenPairing";
import TokenPrice from "./TokenPrice";
import TokenVolume from "./TokenVolume";

import useFetchTokens from "../utils/hooks/useFetchTokens";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    tokenContainer: {
        width: "auto",
        margin: "25px 0",
        background: "#070d12",
    },
    tokenCard: {
        margin: "0 0 4px",
        padding: "15px",
        background: "#141d26",
        color: "#f9f9f9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tokenDrawer: {
        height: "69px",
        overflow: "hidden",
        borderBottom: "2px solid #070d12",
    },
    tokenItemInfo: {
        padding: "0 5px",
    },
});

const TokenView = () => {
    const [page, setPage] = useState(1);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const tokens = useFetchTokens(page);

    const classes = useStyles();

    const handlePageLoad = (page: number) => {
        setPage(page + 1);
    };

    const handleSetCanvas = useCallback((element: any) => {
        setWidth(element.clientWidth);
        setHeight(element.clientWidth / 2);
    }, []);

    const checkWindowHeight = useCallback(() => {
        const container = document.querySelector(".tokenContainer");
        if (container && container.clientHeight < window.innerHeight) {
            handlePageLoad(page);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDrawer = (event: any) => {
        const element = event.currentTarget;
        element.classList.toggle("show");

        if (element) {
            handleSetCanvas(element);
        }
    };

    const handlePageScroll = useCallback(
        (event: any) => {
            if (
                window.innerHeight +
                    event.target.documentElement.scrollTop +
                    1 >
                event.target.documentElement.scrollHeight
            ) {
                handlePageLoad(page);
            }
        },
        [page]
    );

    useEffect(() => {
        if (tokens.length > 0) {
            checkWindowHeight();
        }
    }, [tokens, checkWindowHeight]);

    useEffect(() => {
        window.addEventListener("scroll", handlePageScroll);
        return () => {
            window.removeEventListener("scroll", handlePageScroll);
        };
    }, [handlePageScroll]);

    return (
        <div className={`tokenContainer ${classes.tokenContainer}`}>
            {tokens &&
                tokens.map((token) => (
                    <div
                        key={token.id}
                        className={classes.tokenDrawer}
                        onClickCapture={handleDrawer}
                    >
                        <div className={`card ${classes.tokenCard}`}>
                            <TokenImage
                                image={token.image}
                                name={token.name}
                                classProps={classes.tokenItemInfo}
                            />
                            <TokenPairing
                                name={token.name}
                                symbol={token.symbol}
                                classProps={classes.tokenItemInfo}
                            />
                            <SparkLine
                                isDrawer={false}
                                sparkline={token.sparkline_in_7d}
                                width={90}
                                height={35}
                            />
                            <TokenVolume
                                volume={token.total_volume}
                                price={token.current_price}
                                symbol={token.symbol}
                                classProps={classes.tokenItemInfo}
                            />
                            <TokenPrice
                                currentPrice={token.current_price}
                                priceChange={token.price_change_percentage_24h}
                                classProps={classes.tokenItemInfo}
                            />
                        </div>
                        <div>
                            <SparkLine
                                isDrawer={true}
                                sparkline={token.sparkline_in_7d}
                                width={width}
                                height={height}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TokenView;
