import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Editor from "./pages/Editor";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/singup" element={<div>회원가입페이지</div>} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route element={<Layout />}>
          <Route path="/myPage" element={<div>마이페이지</div>} />
          <Route path="/userInfo/:id" element={<div>회원정보페이지</div>} />
          <Route path="/mainPage" element={<div>메인페이지</div>} />
          <Route path="/articlePage/:id" element={<div>게시글상세페이지</div>} />
          <Route path="/editor/:id" element={<div>게시글 수정페이지</div>} />
        </Route>
        <Route path="/editor/new" element={<Editor />} />
      </Routes>
    </div >
  );
}

export default App;
