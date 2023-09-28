import Image from "next/image";
import Post from "../../components/Post";

export default function Home() {
  return (
    <>
      <section>
        <h1>Blog.</h1>
        <div>
          <Post imgSrc={""} title={"첫 게시물"} />
        </div>
      </section>
      <section></section>
      <section></section>
    </>
  );
}
