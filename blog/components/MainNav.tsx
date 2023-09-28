import Link from "next/link";
import React from "react";

const navlinks: { title: string; link: string }[] = [
  { title: "Home", link: "/" },
  { title: "Blog", link: "/blog" },
  { title: "AboutMe", link: "/about-me" },
  { title: "TimeLine", link: "/time-line" },
];

const MainNav = () => {
  return (
    <nav className="flex justify-between py-2 px-8 h-16 items-center bg-pink-100">
      <div className="flex gap-6">
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            {nav.title}
          </Link>
        ))}
      </div>
      <div></div>
    </nav>
  );
};

export default MainNav;
