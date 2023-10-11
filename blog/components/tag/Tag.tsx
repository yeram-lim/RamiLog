"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { TagInfoType } from "../../asset/type";

const Tag = ({ tagName, link }: TagInfoType) => {
  const router = useRouter();
  return (
    <span className={` cursor-pointer`} onClick={() => router.push(link)}>
      {tagName}
    </span>
  );
};

export default Tag;
