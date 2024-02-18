import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });
  const user = token?.user;

  const Redirect = () => {
    if (user.userTypeId === 2) {
      //User
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (user.userTypeId === 1) {
      //Admin
      return NextResponse.redirect(new URL("/adm/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  };

  const authRoutes = ["/signIn", "/signUp", "/forgot_password"];

  if (!!token && authRoutes.includes(pathname)) {
    return Redirect();
  }

  if (!token) {
    if (
      pathname.includes("/adm/dashboard") ||
      pathname.includes("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/not-found", request.url));
    }
  } else {
    if (
      (pathname.startsWith("/adm/dashboard") && user.userTypeId !== 1) ||
      (pathname.startsWith("/dashboard") && user.userTypeId !== 2)
    ) {
      return Redirect();
    }
  }
}

export const config = {
  matcher: [
    "/signIn",
    "/signUp",
    "/forgot_password",
    "/adm/:path*",
    "/dashboard/:path*",
  ],
};
