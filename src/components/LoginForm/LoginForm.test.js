import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

test("<LoginForm /> Working Fine", async () => {
  render(<LoginForm />);
  expect(screen.getByText("Login Here")).toBeInTheDocument();
  const userName = screen.getByRole("textbox", { htmlFor: "userEmail" });
  const userPass = screen.getByRole("textbox", { htmlFor: "userPass" });
  const loginBtn = screen.getByRole("button", { id: "loginButton" });
  expect(userName).toBeInTheDocument();
  expect(userPass).toBeInTheDocument();
  expect(loginBtn).toBeInTheDocument();
  fireEvent.change(userName, { target: { value: "kminchelle" } });
  fireEvent.change(userPass, { target: { value: "0lelplR" } });
  fireEvent.click(loginBtn);
});
