import { createUseStyles } from "react-jss";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const useStyles = createUseStyles({
    sparkline: {
        maxWidth: "100%",
        marginBottom: "4px",
        background: "#141d26",
    },
});

interface SparklineProps {
    isDrawer?: boolean | undefined;
    sparkline: { price: [] };
    width: number;
    height: number;
}

const Sparkline = ({ isDrawer, sparkline, width, height }: SparklineProps) => {
    const classes = useStyles();

    let prices: number[] = sparkline.price;

    if (!isDrawer) {
        prices = prices.filter((_, index) => index % 8 == 0);
    }

    const data = {
        labels: prices,
        datasets: [
            {
                label: "",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "#be6240",
                data: prices,
                pointRadius: 1,
                pointHoverRadius: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    boxWidth: 0,
                },
            },
            tooltip: {
                callbacks: {
                    title: () => "",
                },
                displayColors: false,
                yPadding: 10,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                ticks: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                    borderWidth: 0,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
            <div
                className={classes.sparkline}
                style={{ width: width, height: height }}
            >
                <Line data={data} options={options} />
            </div>
        </>
    );
};

export default Sparkline;
