import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import { createContext, useState } from "react";
import Switch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Books />}></Route>
            <Route path="/add" element={<Add />}></Route>
            {/* <Route
              path="/update/:id"
              element={<Update theme={theme} toggleTheme={toggleTheme} />}
            ></Route> */}
            <Route path="/update/:id" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
        <div className="switch">
          <label>{theme === "light" ? "Light mode" : "Dark mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "light"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
