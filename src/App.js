import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, BrowserRouter } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "./Routes";
import { UserContext } from "./context";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  const userContextValue = {
    currentUserId,
    setCurrentUserId,
    currentUserName,
    setCurrentUserName,
    currentUserEmail,
    setCurrentUserEmail,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <ToastContainer autoClose={5000} />
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/auth" component={Auth} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
