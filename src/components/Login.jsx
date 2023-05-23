import { useRef } from "react";
import useAppContext from "../custom_hooks/useAppContext";

export default function Login() {
  const context = useAppContext();
  const username = useRef(null);

  function handleUserLogin() {
    context.dispatch({
      type: "USER_LOGIN",
      name: username.current.value
    });
    console.log(username.current.value);
  }

  function handleGuestLogin() {
    context.dispatch({
      type: "GUEST_LOGIN",
      name:  "Guest"
    });
  }

  return (
    <div className="loginform">
      <h3>Log In</h3>
      <form>
        <div>
          <h4>Username:</h4>
          <input
            type="text"
            className="detail"
            placeholder="Enter username..."
            ref={username}
            required
          />
        </div>
        <div>
          <h4>Password:</h4>
          <input
            type="password"
            className="detail"
            placeholder="Enter password..."
            required
          />
        </div>
        <button
          type="submit"
          className="detail contact--button"
          onClick={() => handleUserLogin()}
        >
          Log In
        </button>
      </form>
      <button
        type="submit"
        className="detail contact--button"
        onClick={() => handleGuestLogin()}
      >
        Log In as Guest
      </button>
    </div>
  );
}
