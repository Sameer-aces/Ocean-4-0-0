import { Navigate, Outlet, Route  } from "react-router-dom";
import { GlobalContext } from "../../GlobalProvider";
import { useContext } from "react";
const PrivateRoutes = () => {
  const { x, setX, auth } = useContext(GlobalContext);

  console.log(x, localStorage.getItem("auth"));
  if (localStorage.getItem("jwtToken")) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};
function ProtectedRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}
export default PrivateRoutes;
