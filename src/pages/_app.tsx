import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  useEffect(() => {
    if (router.pathname === "/login") return; // pathnameが"/login"の場合には処理を行わない
    // ここに処理を書く
    router.push("/login");
  }, [router.pathname]);
  console.log("きた")
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
