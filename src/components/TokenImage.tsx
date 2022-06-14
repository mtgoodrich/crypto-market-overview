import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    imageSize: {
        width: "20px",
    },
    [`@media (min-width: 480px)`]: {
        imageSize: {
            width: "25px",
        },
    },
});

interface ImageProps {
    classProps: string;
    image: string;
    name: string;
}

const TokenImage = ({ image, name, classProps }: ImageProps) => {
    const classes = useStyles();
    return (
        <div className={classProps} data-testid="image-wrapper">
            <img
                className={classes.imageSize}
                src={image}
                alt={`${name} token`}
            />
        </div>
    );
};

export default TokenImage;
