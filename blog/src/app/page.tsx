import Image from "next/image";
import Post from "../../components/Post";
import { getLastestPosts } from "@/lib/getPostApi";

export default async function Home() {
  const posts = await getLastestPosts();

  return (
    <>
      <section>
        <h1>Blog.</h1>
        <div className={`flex`}>
          {posts.map((post) => (
            <Post
              key={post.title}
              imgSrc={""}
              title={post.title}
              link={`/post/${post.date}`}
            />
          ))}
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
}
