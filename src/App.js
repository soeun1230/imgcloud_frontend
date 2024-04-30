import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import KakaoRedirectPage from "./login/KakaoRedirectPage";
import NaverRedirectPage from "./login/NaverRedirectPage"
import Login from "./login/Login";
import MainRepo from "./repo/MainRepo";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/oauth/redirected/kakao"
            element={<KakaoRedirectPage />}
          ></Route>
          <Route
             path="/oauth/redirected/naver"
             element={<NaverRedirectPage />}
           ></Route>
          <Route path="/mainRepo" element={<MainRepo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
