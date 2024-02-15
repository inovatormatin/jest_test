import React, { useState } from "react";

export const LoginForm = ({ setUserLogedIn }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const login = () => {
    if (email !== "" && pass !== "") {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: email,
          password: pass,
          // expiresInMins: 60, // optional
        }),
      })
        .then((res) => {
          res.json();
          setUserLogedIn(true);
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div>
      <h2>Login Here</h2>
      <label htmlFor="userEmail">User - (kminchelle)</label>
      <br />
      <input
        name="user"
        type="email"
        htmlFor="userEmail"
        placeholder="Enter your user email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="userPass">Password - (0lelplR)</label>
      <br />
      <input
        name="pass"
        type="password"
        htmlFor="userPass"
        placeholder="Enter your password here"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <br />
      <button id="loginButton" onClick={() => login()}>
        Login
      </button>
    </div>
  );
};
