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

// 게시글 상세조회
export const getDetailPostApi = async (postId) => {
  const res = await instance.get(`/api/posts/${postId}`);
  return res
}

// 게시글 삭제
export const deletePostApi = async (postId) => {
  const res = await instance.delete(`/api/posts/${postId}`);
  return res
}