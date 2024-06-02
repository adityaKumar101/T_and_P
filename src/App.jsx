import React from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import AuthProvider from "./Provider/AuthProviderComp";
import Routes from "./Routes/Routes";
import { Navigation } from "./components/navigation";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {


  return (
    <div>

      <AuthProvider>
        <Routes />
      </AuthProvider>


    </div>
  );
};

export default App;
