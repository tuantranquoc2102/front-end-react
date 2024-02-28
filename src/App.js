import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// import LeftNavigator from './components/LeftNavigator';
import ReactSuiteSidenavComponent from './components/ReactSuiteSidenavComponent';


function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            {/* Left Navigator */}
            <div className="col-md-3">
              <div>
                {/* Left Navigator */}
                {/* Add your left navigator components here */}
                {/* <LeftNavigator /> */}
                <ReactSuiteSidenavComponent />
            </div>
            </div>

            {/* Main Content Area */}
            <div className="col-md-9">
              <Routes> 
                    <Route path = "/" exact element = {<HomePage/>}></Route>
                    <Route path = "/employees" element = {<ListEmployeeComponent/>}></Route>
                    <Route path = "/add-employee/:id" element = {<CreateEmployeeComponent/>}></Route>
                    <Route path = "/view-employee/:id" element = {<ViewEmployeeComponent/>}></Route>
                    
              </Routes>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;