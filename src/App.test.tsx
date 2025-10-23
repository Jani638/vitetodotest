import App from "./App";
import {expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"

test("renderoi app komponentin", () => {

    render(<App />);
    const header = screen.getByText(/My Todos/i);
    expect(header).toBeInTheDocument();
});