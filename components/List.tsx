import Link from "next/link";
import React from "react";

type Props = { items: {} };

function List({ items }: Props) {
  return (
    <ul className="">
      {items?.map((item) => (
        <li
          className="rounded text-4xl text-[#03383f] text-opacity-50 p-5 border-none border-white m-10
                         hover:text-opacity-100 
                         transition-color duration-700"
        >
          <Link href={"food/[id]"} as={`/food/${item.id}`}>
            {item.name}
          </Link>
          {/* <a href={`/food/${item.id}`}>{item.name}</a> */}
        </li>
      ))}
    </ul>
  );
}

export default List;
