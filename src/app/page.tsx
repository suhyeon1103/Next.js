import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hi next.js</h1>
      <Link href="/counter">
        <button>카운터 모듈로 이동</button>
      </Link>
    </div>
  );
}
