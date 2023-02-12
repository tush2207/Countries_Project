import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, component: Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
