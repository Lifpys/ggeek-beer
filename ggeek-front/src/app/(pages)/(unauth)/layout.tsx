import { headers } from "next/headers";
import Providers from "@/lib/Providers";
// import { getAuth } from "@/hooks/auth/authService";

// 동적 렌더링 강제
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url") || headersList.get("referer") || "";

  let queryParams: Record<string, string> = {};
  if (fullUrl) {
    const url = new URL(fullUrl);
    queryParams = Object.fromEntries(url.searchParams);
  }

  const cookieHeader = headersList.get("cookie");
  const match = cookieHeader?.match(new RegExp(`(^|;)\\s*${"jwt"}=([^;]*)`));

  // const user = await getAuth(
  //   match ? decodeURIComponent(match[2]) : queryParams?.token
  // );
  const user = null;

  return (
    <>
      <Providers user={user}>{children}</Providers>
    </>
  );
}
