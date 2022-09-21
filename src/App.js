import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from "./components/Form";
import Table from "./components/Table";
import RadarChart from "./components/RadarChart";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Form /> } path='/' />
        <Route element={<Table /> } path='/table' />
        <Route element={<RadarChart /> } path='/radarchart' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;