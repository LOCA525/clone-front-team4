import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/common/Layout";
import SignUpPage from "./pages/signUpPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<div>로그인페이지</div>} />
        <Route element={<Layout />}>
          <Route path="/myPage" element={<div>마이페이지</div>} />
          <Route path="/userInfo/:id" element={<div>회원정보페이지</div>} />
          <Route path="/" element={<div>메인페이지</div>} />
          <Route path="/articlePage/:id" element={<div>게시글상세페이지</div>} />
          <Route path="/articlePost" element={<div>게시글 작성페이지</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
