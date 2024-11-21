"use client";
import React, { useState } from "react";
import Link from "next/link";

export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  nickname?: string;
  address?: string;
}

const initData: User[] = [
  {
    id: 1,
    name: "김길동",
    age: 30,
    email: "abc1@example.com",
    nickname: "김해길동",
    address: "김해"
  },
  {
    id: 2,
    name: "박길동",
    age: 28,
    email: "abc2@example.com",
    nickname: "서울길동",
    address: "서울"
  },
  {
    id: 3,
    name: "홍길동",
    age: 35,
    email: "abc3@example.com",
    nickname: "부산길동",
    address: "부산"
  }
];

const Page = () => {
  const [users, setUsers] = useState<User[]>(initData);
  return (
    <div>
      <h1>유저 리스트</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>나이</th>
            <th>마이페이지</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <Link
                href={{
                  pathname: "users/userdetail",
                  query: {
                    user: JSON.stringify(user)
                  }
                }}
              >
                <button>상세 이동</button>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
