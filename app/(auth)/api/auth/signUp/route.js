import { NextResponse } from "next/server";
import { conn } from "@/app/libs/dbC";
import { hashP } from "@/app/libs/crypt";

export async function POST(request) {
  try {
    const { pass, firstName, lastName, email, countryId, username } =
      await request.json();

    const checkUser = await conn.query(
      "SELECT email FROM user WHERE email = ?",
      email
    );

    const checkUsername = await conn.query(
      "SELECT username FROM registered_usernames WHERE username = ?",
      username
    );

    await conn.end();

    if (checkUser.length > 0) {
      return NextResponse.json(
        {
          message: "user_already_exist",
        },
        {
          status: 401,
        }
      );
    } else if (checkUsername.length > 0) {
      return NextResponse.json(
        {
          message: "username_already_exist",
        },
        {
          status: 401,
        }
      );
    } else {
      const pHashh = await hashP(pass);

      const results = await conn.query("INSERT INTO user SET ?", {
        firstName,
        lastName,
        email,
        pass: pHashh,
        userTypeId: 2, //Default to 2 (User)
        countryId,
      });

      await conn.end();

      if (results) {
        const userId = results.insertId;
        const resultsInsertUsername = await conn.query(
          "INSERT INTO registered_usernames SET ?",
          {
            username,
            userId,
          }
        );

        await conn.end();

        if (resultsInsertUsername) {
          return NextResponse.json(
            {
              message: "user_successfully_added",
            },
            {
              status: 200,
            }
          );
        } else {
          return NextResponse.json(
            {
              message: "adding_user_failed",
            },
            {
              status: 500,
            }
          );
        }
      } else {
        return NextResponse.json(
          {
            message: "adding_user_failed",
          },
          {
            status: 500,
          }
        );
      }
    }
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
