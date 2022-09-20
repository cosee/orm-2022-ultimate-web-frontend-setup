import {render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";


describe("App", () => {
    it("renders a counter button", async () => {
        render(<App/>)
        const counter = screen.getByText("count is", {exact: false});

        expect(counter).toHaveTextContent("count is 0")

        await userEvent.click(counter)
        expect(counter).toHaveTextContent("count is 1")
    })
})
