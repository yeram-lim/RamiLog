"use client";
import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const observerOption = {
  threshold: 0.4,
  rootMargin: "-76px 0px 0px 0px",
};

export const getIntersectionObserver = (
  setState: Dispatch<SetStateAction<string>>
) => {
  let direction = "";
  let prevYposition = 0;

  // scroll 방향 check function
  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = "down";
    else direction = "up";

    prevYposition = window.scrollY;
  };

  // observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);

      if (
        (direction === "down" && !entry.isIntersecting) ||
        (direction === "up" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};

type HeadingNodeName = "H1" | "H2" | "H3";

const TableOfContent = () => {
  const [currentId, setCurrentId] = useState<string>("");
  const [headingEls, setHeadingEls] = useState<
    { nodeName: HeadingNodeName; el: Element }[]
  >([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ).map((el) => ({ nodeName: el.nodeName as HeadingNodeName, el: el }));
    setHeadingEls(headingElements);

    headingElements.map((header) => {
      observer.observe(header.el);
    });
    setCurrentId(headingElements[0].el.id);
  }, []);
  if (headingEls.length > 0) {
    return (
      <section className="flex p-4 flex-col fixed w-[15rem] top-[4rem] right-0">
        <div className="w-full rounded-lg border border-solid p-2">
          {headingEls.map((el) => (
            <Fragment key={el.el.innerHTML}>
              <div
                style={{
                  paddingLeft:
                    el.nodeName === "H2"
                      ? "0.5rem"
                      : el.nodeName === "H3"
                      ? "1rem"
                      : 0,
                  color: el.el.id === currentId ? "blue" : "black",
                }}
              >
                {el.el.innerText}
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    );
  }
  return <></>;
};

export default TableOfContent;
