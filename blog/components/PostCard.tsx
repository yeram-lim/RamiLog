"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Post as PostType } from "../asset/type";

const Post = ({ post, link }: { post: PostType; link: string }) => {
  const router = useRouter();
  const { thumbnail, title, tags: tagsString } = post;
  const tags = tagsString.split(",");

  return (
    <div
      className="shadow-lg flex flex-col max-w-full w-[18rem] bg-blue-200 rounded-xl h-[22rem] cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className={`h-[60%] relative`}>
        <Image
          className={`rounded-t-xl`}
          src={thumbnail ?? `/logo.png`}
          alt={"post-img"}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
      <div
        className={`p-4 bg-white flex-grow rounded-b-xl flex flex-col justify-between`}
      >
        <div>{title}</div>
        <div className="flex gap-1 flex-wrap justify-end">
          {tags.map((tag) => (
            <div key={tag} className="text-xs w-fit text-gray-500">
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
