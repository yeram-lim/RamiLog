import Image from "next/image";
import PostCard from "../../components/PostCard";
import { getLastestPosts } from "@/lib/getPostApi";

export default async function Home() {
  const posts = await getLastestPosts();

  return (
    <>
      <section>
        <h1>Blog.</h1>
        <div className={`flex`}>
          {posts.map((post) => (
            <PostCard
              key={post.title}
              post={post}
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
