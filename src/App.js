import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideNav } from "./Components/SideNav";
import { Browse } from "./Pages/Browse";
import { ListenNow } from "./Pages/ListenNow.js";
import { Radio } from "./Pages/Radio.js";

const App = () => {
  return (
    <BrowserRouter>
      <SideNav>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/listenNow" element={<ListenNow />} />
          <Route path="/radio" element={<Radio />} />
        </Routes>
      </SideNav>
    </BrowserRouter>
  );
};

export default App;
