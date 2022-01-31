import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
    test("renders Hello world as a text", () => {
        //Arrange
        render(<Greeting />);
        //Act
        //Assert
        const helloWorldElement = screen.getByText("Hello world", {
            exact: false,
        });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders its good to see you", () => {
        render(<Greeting />);
        const itsGoodToSeeYou = screen.getByText("It's good to see you!");
        expect(itsGoodToSeeYou).toBeInTheDocument();
    });

    test("renders 'Changed' to screen", () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });

    test("click makes text disappear", () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText("It's good to see you!");
        expect(outputElement).toBeNull();
    });
});
