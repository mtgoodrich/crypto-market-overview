import { render, screen } from "@testing-library/react";
import App from "./App";
import TokenImage from "./components/TokenImage";

test("renders the app in the document", () => {
    render(<App />);

    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
});

test("renders the token view app token images", () => {
    render(
        <TokenImage
            image="http://gotit.com"
            name="Bitcoin"
            classProps="tokenItem"
        />
    );

    const wrapperDiv = screen.getByTestId("image-wrapper");
    expect(wrapperDiv).toHaveAttribute("class", "tokenItem");

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "http://gotit.com");

    const altText = screen.getByAltText(/Bitcoin token/i);
    expect(altText).toBeInTheDocument();
});
