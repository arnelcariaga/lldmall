import { NextResponse } from "next/server";
import { conn } from "@/app/libs/dbC";
import { hashP } from "@/app/libs/crypt";

export async function POST(request) {
  try {
    const { pass, firstName, lastName, email, countryId } =
      await request.json();

    const pHashh = await hashP(pass);

    const result = await conn.query("INSERT INTO user SET ?", {
      firstName,
      lastName,
      email,
      pass: pHashh,
      userTypeId: 2, //Default to 2 (User)
      countryId,
    });

    return NextResponse.json(
      {
        message: result,
      },
      {
        status: 200,
      }
    );

    /* const image = data.get("image");
  
      if (!data.get("name")) {
        return NextResponse.json(
          {
            message: "Name is required",
          },
          {
            status: 400,
          }
        );
      }
  
      if (!image) {
        return NextResponse.json(
          {
            message: "Image is required",
          },
          {
            status: 400,
          }
        );
      }
  
      const buffer = await processImage(image);
  
      const res = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
            },
            async (err, result) => {
              if (err) {
                console.log(err);
                reject(err);
              }
  
              resolve(result);
            }
          )
          .end(buffer);
      });
  
      const result = await conn.query("INSERT INTO product SET ?", {
        name: data.get("name"),
        description: data.get("description"),
        price: data.get("price"),
        image: res.secure_url,
      });
  
      return NextResponse.json({
        name: data.get("name"),
        description: data.get("description"),
        price: data.get("price"),
        id: result.insertId,
      }); */
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
