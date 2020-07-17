import React, { useState } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, BrowserRouter } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "./Routes";
import { ThemeProvider } from "styled-components";
import chooseTheme from "./Styles/Theme";
import {
  UserContext,
  ThemeContext,
  CircleContext,
  MoodContext,
} from "./context";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Mood from "./components/Mood/Mood";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentUserName, setCurrentUserName] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(3);
  const [circleText, setCircleText] = useState([]);
  const [mood, setMood] = useState({
    mood: null,
    activites: [],
    title: "",
    content: "",
  });

  const userContextValue = {
    currentUserId,
    setCurrentUserId,
    currentUserName,
    setCurrentUserName,
    currentUserEmail,
    setCurrentUserEmail,
  };

  const themeContextValue = {
    currentTheme,
    setCurrentTheme,
  };

  const circleContextValue = {
    circleText,
    setCircleText,
  };

  const moodContextValue = {
    mood,
    setMood,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <CircleContext.Provider value={circleContextValue}>
          <MoodContext.Provider value={moodContextValue}>
            <ThemeProvider theme={chooseTheme(currentTheme)}>
              <ToastContainer
                transition={Zoom}
                autoClose={2000}
                draggable={false}
                limit={1}
                closeOnClick={false}
              />
              <GlobalStyle theme={chooseTheme(currentTheme)} />
              <BrowserRouter>
                <Switch>
                  <AuthRoute path="/auth" component={Auth} />
                  <ProtectedRoute path="/mood" component={Mood} />
                  <ProtectedRoute path="/" component={Home} />
                </Switch>
              </BrowserRouter>
            </ThemeProvider>
          </MoodContext.Provider>
        </CircleContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
