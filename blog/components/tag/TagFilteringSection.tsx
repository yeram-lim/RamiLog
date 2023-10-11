"use client";
import React from "react";
import TagWrap from "./TagWrap";
import { TagInfoType } from "../../asset/type";

const tagList: TagInfoType[][] = [
  [
    { tagName: "ALL", link: "/blog" },
    { tagName: "FrontEnd", link: "/blog/FrontEnd" },
    { tagName: "Algorithm", link: "/blog/Algorithm" },
    { tagName: "Project", link: "/blog/Project" },
  ],
];

const TagFilteringSection = ({ pickedTag }) => {
  return (
    <section className={`flex flex-col items-center bg-blue-100`}>
      <div className={` text-xl`}>{pickedTag ?? ""}</div>
      <div className={`flex flex-col`}>
        <TagWrap tagList={tagList[0]}></TagWrap>
      </div>
    </section>
  );
};

export default TagFilteringSection;
