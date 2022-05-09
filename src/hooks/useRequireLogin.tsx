import { useRouter } from "next/router";
import { useEffect } from "react";

export function useRequireLogin() {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/login") return; // pathnameが"/login"の場合には処理を行わない
    // ここに処理を書く
    router.push("/login");
  }, []);
}
