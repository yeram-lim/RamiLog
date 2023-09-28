import Image from "next/image";
import React from "react";

const Post = ({ imgSrc, title }) => {
  return (
    <div className=" shadow-lg flex flex-col w-[30%] bg-blue-200 rounded-xl h-[22rem] cursor-pointer">
      <div className={`h-[60%] relative`}>
        <Image
          className={`rounded-t-xl`}
          src={imgSrc}
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
