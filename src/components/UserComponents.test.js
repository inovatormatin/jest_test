import { render, screen } from "@testing-library/react";
import { UserComponent } from "./UserComponent";

test("<UserComponent />", async () => {
  render(<UserComponent />);
  const text = screen.getByText("User List goes here.");
  expect(text).toBeInTheDocument();
  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(4);
});
