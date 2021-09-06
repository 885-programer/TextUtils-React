import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//  import About from './components/About';

export default function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const Showalert = (message, type) => {
    setalert({
      msg: message,
      types: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const Togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      Showalert("Dark Mode has been enabled", "Success");
      document.title = "TextUtils-Dark Mode";
    
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      Showalert("Light Mode has been enabled", "Success");
      document.title = "TextUtils-Light Mode ";
    }
  };
  return (
    <>
      
        {/* <Router> */}
        <Navbar
          title="TextUtils"
          About="About"
          mode={mode}
          Togglemode={Togglemode}
        />
        <strong>
          <Alert alert={alert} />
        </strong>
        <div className="container my-3">
        
            {/* <Switch> */}
              {/* <Route exact path="/about"> */}
                {/* <About /> */}
              {/* </Route> */}
              {/* <Route exact path="/"> */}
                <TextForms
                  Showalert={Showalert}
                  heading="Enter The Text To analyze"
                />
              {/* </Route> */}
            {/* </Switch> */}
            </div>
          {/* </Router> */}
         

          {/* <About/> */}
       
      
    </>
  );
}
