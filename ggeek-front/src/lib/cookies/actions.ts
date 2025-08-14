"use server";

import { cookies } from "next/headers";

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  const value = cookieStore.get(name);
  return value?.value || "";
}
