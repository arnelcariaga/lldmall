import { conn } from "@/app/libs/dbC";

export async function getAllCountries() {
  try {
    const countries = await conn.query("SELECT * FROM countries");
    await conn.end();
    return countries;
  } catch (error) {
    return error;
  }
}
