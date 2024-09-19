import Link from "next/link";
import { Name } from "@/components/Name";

export default function Home() {
  return (
    <div>
      <Name />
      <div>
        <Link href="/user/sign-up"></Link>
        <Link href="/user/login"></Link>
      </div>
    </div>
  );
}
