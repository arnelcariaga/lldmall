import { NextResponse } from "next/server";
import { conn } from "@/app/libs/dbC";

export async function POST(request) {
  try {
    const data = await request.json();
    const username = data.username;

    const results = await conn.query("SELECT * FROM registered_usernames");

    return NextResponse.json(
      {
        message: results,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
