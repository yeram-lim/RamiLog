"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Post = ({ imgSrc, title, link }) => {
  const router = useRouter();
  return (
    <div
      className=" shadow-lg flex flex-col w-[30%] bg-blue-200 rounded-xl h-[22rem] cursor-pointer"
      onClick={() => router.push(link)}
    >
      <div className={`h-[60%] relative`}>
        <Image
          className={`rounded-t-xl`}
          src={imgSrc ?? `/logo.png`}
          alt={"post-img"}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
      <div className={` p-4 bg-white flex-grow  rounded-b-xl`}>{title}</div>
    </div>
  );
};

export default Post;
