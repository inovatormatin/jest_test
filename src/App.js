import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UserComponent } from "./components/UserComponent";

function App() {
  const [userLogedIn, setUserLogedIn] = useState(false);
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <h1>Testing</h1>
      {userLogedIn ? (
        <UserComponent />
      ) : (
        <LoginForm setUserLogedIn={setUserLogedIn} />
      )}
    </div>
  );
}

export default App;
