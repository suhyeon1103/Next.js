"use client";

import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [count, setCount] = useState(0);

  const onIncrease = (): void => {
    setCount((prev) => prev + 1);
  };

  const onDecrease = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div>
        <h1>Count Value : {count}</h1>
        <button onClick={onIncrease}>+ 1</button>
        <button onClick={onDecrease}>- 1</button>
        <nav>
          <Link href="/">
            <button>홈으로 가기</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Page;
