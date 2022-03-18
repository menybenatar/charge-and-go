import { Outlet } from "react-router-dom";
import Login from "./login";
import cookie from "react-cookies";

const validateToken = () => {
  let token = cookie.load("token");
  try {
    // const res = await axios.post("http://10.0.0.5:4000/user/login", {
    //   email: this.email,
    //   password: this.password,
    // });
    // const token = res.body.token;  todo whis shai and yair !!!
  } catch (err) {
    cookie.remove("token");
    token = undefined;
  }
  return token;
};

export default function ProtectedRoutes() {
  return validateToken() ? <Outlet /> : <Login />;
}
