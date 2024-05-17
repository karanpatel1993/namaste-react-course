import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us test cases", () => {
  beforeAll(() => {
    console.log("Before All Tests");
  });

  beforeEach(() => {
    console.log("Before Each Test");
  });

  test("should load ContactUs component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside ContactUs component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input component inside ContactUs component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("should load 2 input boxes inside ContactUs component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
