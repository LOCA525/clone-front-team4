import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Editor from "./pages/Editor";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/myPage" element={<MyPage/>} />
          <Route path="/userInfo/:id" element={<div>회원정보페이지</div>} />
          <Route path="/" element={<div>메인페이지</div>} />
          <Route path="/articlePage/:id" element={<div>게시글상세페이지</div>} />
          <Route path="/editor/:id" element={<div>게시글 수정페이지</div>} />
        </Route>
        <Route path="/editor/new" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;
