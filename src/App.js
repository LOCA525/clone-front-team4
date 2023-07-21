import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/singup" element={<div>회원가입페이지</div>} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route path="/myPage" element={<div>마이페이지</div>} />
        <Route path="/userInfo/:id" element={<div>회원정보페이지</div>} />

        <Route path="/mainPage" element={<div>메인페이지</div>} />
        <Route path="/articlePage/:id" element={<div>게시글상세페이지</div>} />
        <Route path="/articlePost/:id" element={<div>게시글 작성페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
