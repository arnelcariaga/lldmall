import { conn } from "@/app/libs/dbC";
import { verify } from "@/app/libs/jwtF";

export async function getAllCountries() {
  try {
    const countries = await conn.query("SELECT * FROM countries");
    await conn.end();
    return countries;
  } catch (error) {
    return error;
  }
}

export async function getUserByUsername({ username, loggedUser }) {
  try {
    if (username) {
      const loggedUserId = verify(loggedUser).userId;

      let sqlQuery, sqlParams;

      if (loggedUserId) {
        sqlQuery = `
        SELECT
          username,
          photo,
          lastSignIn,
          bio,
          (SELECT COUNT(*) FROM followers WHERE followers.userId = u.userId) AS follower_count,
          (SELECT COUNT(*) FROM following WHERE following.userId = u.userId) AS following_count,
          SUM(ur.countStar) AS total_stars,
          (
              SELECT COUNT(*) 
              FROM following fl
              WHERE fl.followingUserId = u.userId AND fl.userId = ?
          ) AS is_following,
          COUNT(null) AS i_following_meself
          FROM user u
          LEFT JOIN user_rating ur ON u.userId = ur.userId
          WHERE username = ?
          GROUP BY u.userId
      `;
        sqlParams = [loggedUserId, username];
      } else {
        sqlQuery = `
        SELECT
        username,
        photo,
        lastSignIn,
        (SELECT COUNT(*) FROM followers WHERE followers.userId = u.userId) AS follower_count,
        (SELECT COUNT(*) FROM following WHERE following.userId = u.userId) AS following_count,
        SUM(ur.countStar) AS total_stars
        FROM user u
        LEFT JOIN user_rating ur ON u.userId = ur.userId
        WHERE username = ?
        GROUP BY u.userId
      `;
        sqlParams = [username];
      }

      const user = await conn.query(sqlQuery, sqlParams);

      await conn.end();

      if (user.length > 0) {
        delete user[0].userId;
        return { ...user[0] };
      } else {
        return "user_not_found";
      }
    } else {
      return "id_not_provided";
    }
  } catch (error) {
    console.log(error);
  }
}
