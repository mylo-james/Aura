import React, { useEffect, useContext } from "react";
import { backendURL } from "./config";
import { UserContext } from "./context";
import { Route, Redirect, useHistory } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, path, exact }) => {
  const {
    currentUserId,
    setCurrentUserId,
    currentUserName,
    setCurrentUserName,
    currentUserEmail,
    setCurrentUserEmail,
  } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!currentUserId && !localStorage.getItem("aura_access_token")) {
      history.push("/auth");
    }

    (async () => {
      if (!currentUserId) {
        localStorage.removeItem("aura_register");
        const body = {
          access_token: JSON.parse(localStorage.getItem("aura_access_token")),
        };
        try {
          const res = await fetch(`${backendURL}/session/check`, {
            method: "POST",
            Authorization: localStorage.getItem("aura_acess_token"),
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          if (!res.ok) {
            history.push("/auth");
            return;
          }

          const { user } = await res.json();
          setCurrentUserId(user.id);
          setCurrentUserName(user.name);
          setCurrentUserEmail(user.email);
        } catch (e) {
          history.push("/auth");
        }
      }
    })();
  }, [
    history,
    currentUserId,
    setCurrentUserEmail,
    setCurrentUserId,
    setCurrentUserName,
  ]);

  if (!currentUserId || !currentUserName || !currentUserEmail) return null;

  return (
    <>
      <Route
        path={path}
        exact={exact}
        render={(props) => <Component {...props} />}
      />
    </>
  );
};

export const AuthRoute = ({ component: Component, path, exact }) => {
  const { currentUserId } = useContext(UserContext);
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        currentUserId ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
