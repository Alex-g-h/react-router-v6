import React from "react";
// Librares
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// elements
import Card from "../components/Card";

// Store
import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
  const isLoggedIn = useSelector(isLoggedInSelector());

  //   if (isLoggedIn) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <Card>
        <Outlet />
        {/* <Redirect to={path + "/signup"} /> */}
      </Card>
    </div>
  );
};

export default AuthLayout;
