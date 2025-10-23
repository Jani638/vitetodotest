import TodoList from "./TodoList";
import { test, afterEach, expect } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("add todo", () => {
    
    render(<TodoList />);

    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });

    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "20.11.2025" } });

    const button = screen.getByText("Add");
    fireEvent.click(button);

    expect(screen.getByRole("table")).toHaveTextContent(/go to coffee/i);
});

test("clear todo", () => {

    render(<TodoList />);

    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });

    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "20.11.2025" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);

    expect(screen.getAllByRole("table")).not.toHaveTextContent;

    expect(screen.getByPlaceholderText("Description")).not.toHaveTextContent;
    expect(screen.getByPlaceholderText("Date")).not.toHaveTextContent;
});

afterEach(() => {
  cleanup();
});