import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]=useState("")
  const [authMode, setAuthMode] = useState("login");

  const { handleSignUp,handleLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (authMode === "signup") {
      if (email && password && name) handleSignUp(name,email, password);
    }
    else {
      handleLogin(password, email);
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        {authMode === "signup" && (
          <div className={styles.row}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Vaibhav Raj"
            />
          </div>
        )}

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="vaibhav@gmail.com"
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button type="primary">Login</Button>
          <p
            onClick={() =>
              setAuthMode((curr) => (curr === "signup" ? "login" : "signup"))
            }
            className={styles.hover}
          >
            {authMode === "signup" ? "Click to Login" : "Sign Up here"}
          </p>
        </div>
      </form>
    </main>
  );
}
