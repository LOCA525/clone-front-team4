import instance from ".";

// 회원가입
export const postSignupApi = async (body) => {
  const res = await instance.post("/api/auth/signup", body);
  return res;
};

// 이메일 중복
export const postEmailDuplicate = async (body) => {
  const res = await instance.post("/api/auth/signup/email", body);
  return res;
};

// 닉네임 중복
export const postNicknameDuplicate = async (body) => {
  const res = await instance.post("/api/auth/signup/email", body);
  return res;
};

// 로그인
export const postLoginApi = async (body) => {
  const res = await instance.post("/api/auth/login", body);
  return res;
};

//회원정보 업데이트