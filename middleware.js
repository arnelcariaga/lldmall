import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request });
  const user = token?.user;

  const Redirect = () => {
    if (user.userTypeId === 1) {
      return NextResponse.redirect(new URL("/adm/dashboard", request.url));
    } else if (user.userTypeId === 2) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(
        new URL(
          "/signIn?error=Please login first to access this route",
          request.url
        )
      );
    }
  };

  const authRoutes = ["/signIn", "/signUp", "/forgot_password"];

  if (!!token && authRoutes.includes(pathname)) {
    return Redirect();
  }

  if (
    (!!token && pathname.startsWith("/adm") && user.userTypeId !== 1) ||
    (!!token && pathname.startsWith("/dashboard") && user.userTypeId !== 2)
  ) {
    return Redirect();
  }

  if (!token) {
    if (
      pathname.includes("/dashboard") ||
      pathname.includes("/adm/dashboard")
    ) {
      return Response.json(
        { success: false, message: "authentication failed" },
        { status: 401 }
      );
    }
  } else {
    if (
      (pathname.startsWith("/adm/dashboard") && user.userTypeId !== 1) ||
      (pathname.startsWith("/dashboard") && user.userTypeId !== 2)
    ) {
      console.log(pathname, user.userTypeId);
      return Response.json(
        { success: false, message: "authentication failed" },
        { status: 401 }
      );
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
