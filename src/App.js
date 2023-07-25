import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/common/Layout";
import Editor from "./pages/Editor";
import SignUpPage from "./pages/signUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Layout2 from "./component/common/Layout2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/userInfo/:id" element={<div>회원정보페이지</div>} />
          <Route path="/" element={<MainPage />} />
          <Route path="/articlePage/:id" element={<Detail />} />
          <Route path="/editor/:id" element={<div>게시글 수정페이지</div>} />
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/myPage" element={<MyPage />} />
        </Route>
      <Route path="/editor/new" element={<Editor />} />
    </Routes>
    </div >
  );
}

export default App;
