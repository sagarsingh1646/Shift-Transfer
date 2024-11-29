
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { useState } from "react";
import Navigation from "./components/Navigation";
import AddNewTask from "./components/AddNewTask";
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = localStorage.getItem("user");
  console.log("user ==>>", user);
  return !user ? (
    <>

      <Router>
        <Switch>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Switch>
      </Router>
    </>
  ) : (
    <Router>
      <Switch>
        <Route
          path="/dashboard"
          element={<AddNewTask />}
        />
      </Switch>
    </Router>
  );
}

export default App;
