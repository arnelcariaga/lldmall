import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard/:path*"] };

export async function middleware(request) {
  const token = await getToken({ req: request });
  if (!token && process.env.NEXTAUTH_URL) {
    return NextResponse.redirect(process.env.NEXTAUTH_URL + "/signIn");
  }
}
