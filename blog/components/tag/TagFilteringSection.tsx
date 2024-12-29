"use client";
import React from "react";
import { TagInfoType } from "../../asset/type";
import { PostTag } from "../../asset/enum";
import { useRouter } from "next/navigation";

const tagList: TagInfoType[] = [
  { tagName: "ALL", link: "/blog" },
  { tagName: PostTag.FRONT_END, link: `/blog/${PostTag.FRONT_END}` },
  { tagName: PostTag.ALGORITHM, link: `/blog/${PostTag.ALGORITHM}` },
  { tagName: PostTag.PROJECT, link: `/blog/${PostTag.PROJECT}` },
];

const Tag = ({ tagName, link }: TagInfoType) => {
  const router = useRouter();
  return (
    <span className={`cursor-pointer`} onClick={() => router.push(link)}>
      {tagName}
    </span>
  );
};

const TagFilteringSection = ({ pickedTag }: { pickedTag: PostTag }) => {
  return (
    <section className={`flex flex-col items-center bg-blue-100`}>
      <div className={`text-xl`}>{pickedTag ?? "ALL"}</div>
      <div className={`flex flex-col`}>
        <div className={`flex gap-4`}>
          {tagList.map((tag) => (
            <Tag tagName={tag.tagName} link={tag.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagFilteringSection;
