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
import MyEditPage from "./pages/MyEditPage"
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/articlePage/:id" element={<Detail />} />
          </Route>
          <Route element={<Layout2 />}>
            <Route path="/userInfo/:id" element={<MyPage />} />
            <Route path="/userInfo/:id/edit" element={<MyEditPage />} />
            <Route path="/userInfo/:id" element={<MyPage />} />
          </Route>
          <Route path="/editor/:id" element={<Editor />} />
          <Route path="/editor/new" element={<Editor />} />
        </Routes>
      </QueryClientProvider>
    </div >
  );
}

export default App;
