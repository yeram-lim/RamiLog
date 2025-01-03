"use client";
import React from "react";
import { TagInfoType } from "../../asset/type";
import { PostTag } from "../../asset/enum";
import { useRouter } from "next/navigation";

const tagList: TagInfoType[] = [{ tagName: "ALL", link: "/blog" }];
Object.keys(PostTag).map((tagKey: PostTag) =>
  tagList.push({
    tagName: PostTag[tagKey],
    link: `/blog/${PostTag[tagKey]}`,
  })
);

const Tag = ({ tagName, link }: TagInfoType) => {
  const router = useRouter();
  return (
    <span
      className={`cursor-pointer border border-solid rounded-3xl px-2 py-1`}
      onClick={() => router.push(link)}
    >
      {tagName}
    </span>
  );
};

const TagFilteringSection = ({ pickedTag }: { pickedTag: PostTag }) => {
  return (
    <section className={`flex flex-col items-center py-4 gap-4`}>
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
