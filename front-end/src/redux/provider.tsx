"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setCredentials } from "@/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { setCourse } from "@/features/course/courseSlice";
import { setCart } from "@/features/cart/cartSlice";
import { fetchCartThunk } from "@/features/cart/cartThunk";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    // Chỉ redirect nếu đang ở trang root hoặc login
    const isAtRootOrLogin = pathname === "/" || pathname === "/login";

    if (token && user) {
      const parsedUser = JSON.parse(user);
      store.dispatch(setCredentials({ token, user: JSON.parse(user) }));

      // Fetch lại giỏ hàng khi load trang
      store.dispatch(fetchCartThunk({ userId: parsedUser.id, token }));

      if (isAtRootOrLogin) {
        router.push("/home");
      }
    }
  }, [pathname, router]);

  // Set lại course redux khi load trang
  useEffect(() => {
    const courseData = localStorage.getItem("course");
    if (courseData) {
      const parsed = JSON.parse(courseData);
      store.dispatch(setCourse(parsed));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
