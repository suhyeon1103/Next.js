"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { User } from "../page";
import Link from "next/link";

const Page = () => {
  const searchParams = useSearchParams();
  const user: User = JSON.parse(searchParams.get("user") || "{}");

  return (
    <div>
      <h1>마이페이지 화면</h1>
      <h1>------------------------</h1>
      <section>
        <div>
          <p>아이디: {user.id}</p>
          <p>이름: {user.name}</p>
          <p>나이: {user.age}</p>
          <p>이메일: {user.email}</p>
          <p>닉네임: {user.nickname}</p>
          <p>주소: {user.address}</p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <Link href="/users">
        <button>이전 화면으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default Page;
