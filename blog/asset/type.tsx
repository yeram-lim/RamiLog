import { PostTag } from "./enum";

export type TagInfoType = { tagName: PostTag | "ALL"; link: string };

export interface Post {
  title: string;
  date: string;
  description: string;
  tags: string;
  thumbnail: string;
}
