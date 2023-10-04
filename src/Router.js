import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import NavigationBar from "./NavigationBar";
import Account from "./Modules/Accounts/Container/Account";

const Router = () => {
  return <BrowserRouter>
    <NavigationBar/>
    <Routes>
        <Route path="/" element={<Account/>}/>

    </Routes>
  </BrowserRouter>;
};

export default Router;
