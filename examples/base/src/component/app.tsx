import React from "react";
import logo from "../resource/logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeElementList } from "script/route/route";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {routeElementList.map((routeElement) => {
                    return <Route key={routeElement.path} path={routeElement.path} element={routeElement.element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
