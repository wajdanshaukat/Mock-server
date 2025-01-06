import { render, screen } from "@testing-library/react";
import App from "./App";

test("test heading text", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: "APIcls Data" });
  expect(heading).toBeInTheDocument();
})