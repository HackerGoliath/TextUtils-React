import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Home(Dark Mode)";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "whitesmoke"
      showAlert("Light mode enabled", "success");
      document.title = "TextUtils - Home(Light Mode)";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>


      {/* </Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router> */}


      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
          <Route path="about" element={<About />} />
          {/* ... etc. */}
      {/* </Route>
        )
        ); */}

      {/* ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
        ); */}
      {/* </div > */}

    </>
  );
}

export default App;
