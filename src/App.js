import React from "react";
// Components and pages
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import {Route} from "react-router-dom";

function App() {
  // path={["/game/:id", "/"]} means no matter where we are between "/game/:id" and "/", it gonna display the home page
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}> 
        <Home />
      </Route>
    </div>
  );
}

export default App;
