import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={"https://avatars.githubusercontent.com/u/583231?v=4"} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

