import instance from ".";

// 게시글 전체조회
export const getPostsApi = async () => {
  const res = await instance.get("/api/posts");
  return res;
};
