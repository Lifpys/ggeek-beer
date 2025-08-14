"use client";

import ModalPage from "./modal";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import { createStore, Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const store = useMemo(() => createStore(), []); // 컴포넌트 내부로 이동

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <ModalPage />
              <Header />
              {children}
              <Footer />
            </QueryClientProvider>
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
