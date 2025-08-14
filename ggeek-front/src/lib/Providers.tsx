"use client";

import { Provider, createStore } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { userAtom } from "@/store/userAtom";

function HydrateAtoms({
  user,
  userDetail,
  children,
}: {
  user?: any | null;
  userDetail?: any | null;
  children: React.ReactNode;
}) {
  // useHydrateAtoms(
  //   new Map([
  //     [userAtom, user || null],
  //     ["userDetailAtom", userDetail || null],
  //   ])
  // );
  return children;
}

export default function Providers({
  children,
  user,
  userDetail,
}: {
  children: React.ReactNode;
  user?: any | null;
  userDetail?: any | null;
}) {
  return (
    // <Provider>
    <HydrateAtoms user={user} userDetail={userDetail}>
      {children}
    </HydrateAtoms>
    // </Provider>
  );
}
