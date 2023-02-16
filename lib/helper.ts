const baseUrl = "http://localhost:3000/api/posts";

// api/posts
export default async function getPost(id: any) {
  const res = await fetch(`${baseUrl}`);
  const posts = await res.json();

  if (id) {
    return posts.find((value: any) => value.id == id);
  }
  return posts;
}
