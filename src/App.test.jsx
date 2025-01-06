import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("test heading text", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: "API Data" });
  expect(heading).toBeInTheDocument();
});

test("test for mock api", async () => {
  render(<App />);
  await waitFor(() => screen.findAllByRole("listitem"), { timeout: 3000 });

  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(4);
});
