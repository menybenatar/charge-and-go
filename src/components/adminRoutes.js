import { Outlet, Navigate } from "react-router-dom";
import Admin from "./admin";
import cookie from "react-cookies";

const checkAdmin = () => {
  let isAdmin = cookie.load("admin") === "true";
  try {
    // const res = await axios.post("http://10.0.0.5:4000/user/login", {
    //   email: this.email,
    //   password: this.password,
    // });
    // const token = res.body.token;  todo whis shai and yair !!!
  } catch (err) {
    cookie.remove("admin");
    isAdmin = undefined;
  }
  return isAdmin;
};

export default function AdminRoutes() {
  return checkAdmin() ? <Outlet /> : <Navigate to="/" replace />;
}
