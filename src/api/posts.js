import instance from ".";

// 게시글 전체조회
export const getPostsApi = async (body) => {
  const res = await instance.post("/api/posts", body);
  return res;
};

// 게시글 작성
export const postPostsApi = async (body) => {
  const res = await instance.post("/api/posts", body)
  return res
}