import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ email, name: "John Doe" }));
  };

  useEffect(() => console.log(isLoggedIn, userInfo), [isLoggedIn, userInfo]);

  return (
    <div className="container">
      <h1 className="page-title">Login</h1>
      <form className="max-w-md mx-auto" onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="label-style">
            Email
          </label>
          <input
            className="input-style"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="lable-style" htmlFor="password">
            Password
          </label>
          <input
            className="input-style"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button-style" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
