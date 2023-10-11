import React from "react";
import Tag from "./Tag";
import { TagInfoType } from "../../asset/type";

interface props {
  tagList: TagInfoType[];
}

const TagWrap = ({ tagList }: props) => {
  return (
    <div className={`flex gap-4`}>
      {tagList.map((tag) => (
        <Tag tagName={tag.tagName} link={tag.link} />
      ))}
    </div>
  );
};

export default TagWrap;
