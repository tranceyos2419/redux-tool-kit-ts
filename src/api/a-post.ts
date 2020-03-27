export const getPostApi = async (postNumber: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postNumber}`
  );
  const data = await res.json();
  return data
};
